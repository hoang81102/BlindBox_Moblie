import React, { useState, useEffect } from "react";
import { View, ScrollView, Alert, Linking } from "react-native";
import CheckoutHeader from "./CheckoutHeader";
import ShippingAddress from "./ShippingAddress";
import OrderSummary from "./OrderSummary";
import Delivery from "./Delivery";
import Payment from "./Payment";
import CheckoutFooter from "./CheckoutFooter";
import Voucher from "./Voucher";
import {
  createOrder,
  createMultipleOrderDetail,
} from "../../services/OrderService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createPayment } from "../../services/PaymentService";
import { useNavigation } from "@react-navigation/native";
import { changePaymentStatus } from "../../services/PaymentService";
const Checkout = ({ products }) => {
  const [shippingFee, setShippingFee] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [paymentType, setPaymentType] = useState();
  const [shippingAddress, setShippingAddress] = useState(null);
  const [userId, setUserId] = useState(null);
  const [orderCode, setOrderCode] = useState(null); // Khởi tạo orderCode là null
  const navigation = useNavigation();
  const [orderId, setOrderId] = useState(null);
  // Thêm phần logic để điều hướng khi thanh toán thành công
  const handlePaymentSuccess = async (orderCode, orderId) => {
    console.log("ordercode and orderid before enject api", orderCode, orderId);
    const responsePayment = await changePaymentStatus(orderCode, orderId);
    console.log("paymentConfirm: ", responsePayment);
    navigation.navigate("PaymentSuccess");
  };

  useEffect(() => {
    const fetchUserId = async () => {
      const storeUserId = await AsyncStorage.getItem("userId");
      setUserId(storeUserId);
    };
    fetchUserId();
  }, []);

  // Tính lại subtotal khi giỏ hàng thay đổi
  useEffect(() => {
    const calculatedSubtotal = products.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
    setSubtotal(calculatedSubtotal);
  }, [products]);

  // Tính total mỗi khi subtotal, discount, hoặc shippingFee thay đổi
  useEffect(() => {
    const calculatedTotal = subtotal - discount + shippingFee;
    setTotal(calculatedTotal >= 0 ? calculatedTotal : 0); // Không để total âm
  }, [subtotal, discount, shippingFee]);

  // Xử lý khi nhấn nút checkout
  const handleCheckout = async () => {
    console.log("products: ", products);
    // Kiểm tra nếu chưa chọn phương thức thanh toán
    if (!paymentType) {
      Alert.alert("Thông báo", "Vui lòng chọn phương thức thanh toán.");
      return;
    }

    // Kiểm tra và đảm bảo địa chỉ đã được chọn
    if (!shippingAddress) {
      Alert.alert("Thông báo", "Vui lòng chọn địa chỉ giao hàng.");
      return;
    }

    const note = "Your customer note"; // Truyền một ghi chú mặc định nếu không có yêu cầu khác.
    const price = subtotal;
    const priceTotal = total;
    const addressId = shippingAddress.addressId; // Lấy addressId từ địa chỉ đã chọn
    const discountMoney = discount;

    try {
      // Tạo đơn hàng
      const order = await createOrder(
        userId,
        price,
        priceTotal,
        addressId,
        discountMoney,
        note // Truyền trường Note vào API
      );

      // Kiểm tra xem API trả về đúng `orderId`
      if (order && order.orderId) {
        // Lưu orderId vào AsyncStorage
        await AsyncStorage.setItem("orderId", JSON.stringify(order.orderId));
        const orderDetails = products.map((product) => {
          if (product.type === "BlindBox") {
            return {
              blindBoxId: product.blindBoxId,
              packageId: null,
              quantity: product.quantity,
              price: product.price,
            };
          } else if (product.type === "Package") {
            return {
              blindBoxId: null,
              packageId: product.blindBoxId,
              quantity: product.quantity,
              price: product.price,
            };
          }
        });
        // API createMultipleOrderDetail
        if (orderDetails) {
          const createMulti = await createMultipleOrderDetail(
            order.orderId,
            orderDetails
          );
          console.log("Đã tạo đơn hàng thành công!", createMulti);
        }

        // Đến phần thanh toán bằng bank
        if (
          paymentType === "bank" ||
          paymentType === "Bank" ||
          paymentType === "Wallet" ||
          paymentType === "wallet"
        ) {
          const fetchDataForPayment = async () => {
            const storeOrderId = await AsyncStorage.getItem("orderId");
            setOrderId(storeOrderId);
            if (storeOrderId) {
              try {
                const data = await createPayment(storeOrderId, total);
                console.log("oderId: ", storeOrderId);

                if (data && data.data) {
                  const paymentLink = data.data.checkoutUrl;

                  await AsyncStorage.setItem(
                    "orderCode",
                    JSON.stringify(data.data.orderCode)
                  );
                  const orderCode = data.data.orderCode;

                  await AsyncStorage.setItem(
                    "orderId",
                    JSON.stringify(storeOrderId)
                  );
                  const orderId = storeOrderId;

                  console.log("Order Code tại Checkout:", orderCode); // Kiểm tra giá trị orderCode
                  Alert.alert(
                    "Thanh toán",
                    "Vui lòng thanh toán qua link dưới đây",
                    [
                      {
                        text: "Mở link",
                        onPress: () => {
                          Linking.openURL(paymentLink);
                          // Đảm bảo chỉ gọi handlePaymentSuccess sau khi thanh toán hoàn tất
                          Linking.addEventListener("url", (event) => {
                            const { url } = event;
                            if (url.includes("success")) {
                              handlePaymentSuccess(orderCode, orderId); // Gọi hàm khi thanh toán thành công
                            }
                          });
                        },
                      },
                    ]
                  );
                }

                console.log("Thanh toán thành công");
                return data;
              } catch (error) {
                console.log("Lỗi phần thanh toán: ", error);
              }
            }
          };
          fetchDataForPayment(); // Call this function to actually process the payment
        }
      } else {
        throw new Error("Không có orderId trong phản hồi từ API");
      }
    } catch (error) {
      console.error("Lỗi khi tạo đơn hàng:", error);
      Alert.alert(
        "Lỗi",
        "Đặt hàng thất bại. Vui lòng kiểm tra lại thông tin và tiền trong ví!"
      );
    }
  };

  return (
    <ScrollView>
      <CheckoutHeader />
      <ShippingAddress setShippingAddress={setShippingAddress} />
      <OrderSummary products={products} />
      <Voucher subtotal={subtotal} total={total} setDiscount={setDiscount} />
      <Delivery onSelectShipping={setShippingFee} />
      <Payment setPaymentType={setPaymentType} />
      <CheckoutFooter
        subtotal={subtotal}
        shippingFee={shippingFee}
        discount={discount}
        total={total}
        onCheckout={handleCheckout} // Gọi handleCheckout khi nhấn nút checkout
      />
    </ScrollView>
  );
};

export default Checkout;
