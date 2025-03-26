import React, { useState, useEffect } from "react";
import { View, Text, Button, Image, Linking, Alert } from "react-native";
import { createPayment, changePaymentStatus } from "../services/PaymentService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PaymentScreen = ({ route }) => {
  const { total } = route.params;
  const [paymentData, setPaymentData] = useState(null);
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);
  const [orderId, setOrderId] = useState(null);

  // Kiểm tra trạng thái thanh toán
  const checkPaymentStatus = async () => {
    try {
      if (orderId) {
        const response = await changePaymentStatus(orderId); // Dùng API của bạn
        if (response && response.data && response.data.status === "PAID") {
          setIsPaymentCompleted(true);
          Alert.alert("Thông báo", "Thanh toán thành công!");
        }
        if (response && response.data && response.data.status === "CANCELLED") {
          setIsPaymentCompleted(false);
          Alert.alert("Thông báo", "Thanh toán đã bị huỷ!");
        }
      }
    } catch (error) {
      console.error("Lỗi kiểm tra trạng thái thanh toán:", error);
    }
  };

  // Gọi API để tạo thanh toán khi màn hình được tải
  useEffect(() => {
    const createPaymentAndGetLink = async () => {
      const storeOrderId = await AsyncStorage.getItem("orderId");
      if (storeOrderId) {
        setOrderId(storeOrderId); // Lưu orderId vào state
        try {
          const paymentResponse = await createPayment(storeOrderId, total); // Không truyền total nữa, vì amount đã có trong API trả về
          if (paymentResponse && paymentResponse.data) {
            const paymentInfo = paymentResponse.data;
            setPaymentData(paymentInfo);
            // Kiểm tra trạng thái thanh toán sau một khoảng thời gian (ví dụ: mỗi 30s)
            const interval = setInterval(() => checkPaymentStatus(), 30000); // Kiểm tra sau 30s
            // Clear interval khi hoàn tất thanh toán hoặc huỷ
            return () => clearInterval(interval);
          }
        } catch (error) {
          console.log("Lỗi khi tạo thanh toán:", error);
        }
      }
    };
    createPaymentAndGetLink();
  }, []);

  if (!paymentData) {
    return (
      <View>
        <Text>Đang tải thông tin thanh toán...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Thanh toán cho đơn hàng {paymentData.orderCode}</Text>
      <Text>Tiền thanh toán: {paymentData.amount} VND</Text>
      <Text>Mô tả: {paymentData.description}</Text>

      {paymentData.status === "PENDING" && (
        <View>
          <Text>Vui lòng thanh toán trước khi hết hạn!</Text>
          <Text>
            Hạn thanh toán:{" "}
            {new Date(paymentData.expiredAt * 1000).toLocaleString()}
          </Text>

          {/* Hiển thị mã QR */}
          {paymentData.qrCode && (
            <Image
              source={{ uri: `data:image/png;base64,${paymentData.qrCode}` }}
              style={{ width: 200, height: 200 }}
            />
          )}

          {/* Liên kết thanh toán */}
          {paymentData.checkoutUrl && (
            <Button
              title="Thanh toán ngay"
              onPress={() => Linking.openURL(paymentData.checkoutUrl)}
            />
          )}
        </View>
      )}

      {isPaymentCompleted && (
        <View>
          <Text>Thanh toán đã hoàn tất!</Text>
          {/* Bạn có thể thêm hành động chuyển hướng tại đây */}
        </View>
      )}
    </View>
  );
};

export default PaymentScreen;
