import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  Alert,
} from "react-native";
import labubu from "../../assets/labubu.png";
import { getPendingOrder } from "../../services/OrderService"; // Đảm bảo getPendingOrder trả về đúng dạng
import AsyncStorage from "@react-native-async-storage/async-storage";

const PendingOrder = () => {
  const [pendingOrders, setPendingOrders] = useState([]);
  const [userId, setUserId] = useState(null);

  // Lấy userId từ AsyncStorage
  useEffect(() => {
    const fetchUserId = async () => {
      const storedUserId = await AsyncStorage.getItem("userId");
      setUserId(storedUserId);
    };
    fetchUserId();
  }, []);

  // Lấy danh sách đơn hàng pending và lọc theo userId
  useEffect(() => {
    const fetchPendingOrders = async () => {
      try {
        const response = await getPendingOrder();
        console.log("API Response:", response); // Kiểm tra dữ liệu trả về từ API
        if (response && response.items && Array.isArray(response.items)) {
          // Lọc các đơn hàng có accountId === userId
          const filteredOrders = response.items.filter(
            (order) => order.accountId === userId
          );
          setPendingOrders(filteredOrders); // Cập nhật danh sách đơn hàng đang chờ xử lý
        } else {
          setPendingOrders([]); // Nếu không có dữ liệu hoặc không phải mảng, gán là mảng rỗng
        }
      } catch (error) {
        console.error("Error fetching pending orders: ", error);
      }
    };

    if (userId) {
      fetchPendingOrders(); // Chỉ gọi API nếu userId đã có
    }
  }, [userId]);

  const handleCancelOrder = (orderId) => {
    Alert.alert(
      "Confirm cancellation",
      "Are you sure you want to cancel this order?",
      [
        { text: "No", style: "cancel" },
        {
          text: "Yes",
          onPress: () => console.log(`Order ${orderId} has been canceled`),
        },
      ]
    );
  };

  const handleGetOrderDetails = async (orderId) => {
    try {
      console.log("Fetching details for order ID:", orderId);
    } catch (error) {
      console.error("Error fetching order details: ", error);
    }
  };

  return (
    <View style={styles.container}>
      {Array.isArray(pendingOrders) && pendingOrders.length > 0 ? (
        pendingOrders.map((order) => (
          <TouchableOpacity
            key={order.orderId}
            style={styles.orderCard}
            onPress={() => handleGetOrderDetails(order.orderId)}
          >
            <View style={styles.imageContainer}>
              <Image source={labubu} style={styles.image} />
            </View>
            <View>
              <Text style={styles.title}>{`Order ID: ${order.orderCode}`}</Text>
              <View style={styles.subTotal}>
                <Text style={styles.price}>{`${order.priceTotal} VND`}</Text>
                <Text style={styles.text}> * 1</Text>
              </View>
              <View style={styles.totalContainer}>
                <Text style={styles.totalLabel}>Total:</Text>
                <Text style={styles.total}>{`${order.priceTotal} VND`}</Text>
              </View>
              {order.orderStatus === 0 && (
                <TouchableOpacity
                  style={styles.cancel}
                  onPress={() => handleCancelOrder(order.orderId)}
                >
                  <Text style={styles.cancelText}>Cancel Order</Text>
                </TouchableOpacity>
              )}
              {order.orderStatus !== 0 && (
                <View style={styles.statusDeliveryContainer}>
                  <Text style={styles.statusDelivery}>Status:</Text>
                  <Text style={[styles.statusDelivery, { fontWeight: "bold" }]}>
                    {order.orderStatus === 1 ? "Confirmed" : "Delivering"}
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.noOrdersText}>No pending orders</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7",
    paddingBottom: 20,
  },
  orderCard: {
    maxWidth: "95%",
    backgroundColor: "#FFFFFF",
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: "row",
    flexShrink: 1,
    minHeight: 160,
    marginBottom: 10,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: "cover",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: "#0d0045",
    marginVertical: 3,
  },
  subTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#DCDCDC",
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: "#2C3E50",
    fontWeight: "bold",
    textAlign: "right",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#DCDCDC",
    marginBottom: 6,
  },
  totalLabel: {
    fontSize: 14,
    color: "#2C3E50",
    fontWeight: "bold",
  },
  total: {
    fontSize: 16,
    color: "#2C3E50",
    fontWeight: "bold",
    textAlign: "right",
  },
  cancel: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: "#E74C3C",
    borderRadius: 25,
    alignSelf: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  cancelText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  statusDeliveryContainer: {
    flexDirection: "row",
  },
  statusDelivery: {
    fontSize: 14,
    color: "black",
  },
  noOrdersText: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
    marginTop: 20,
  },
});

export default PendingOrder;
``;
