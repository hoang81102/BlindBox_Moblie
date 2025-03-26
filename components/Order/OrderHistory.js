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
import { useNavigation } from "@react-navigation/native";
import { getOrderCompleted } from "../../services/OrderService"; // Đảm bảo getOrderCompleted trả về đúng dạng
import AsyncStorage from "@react-native-async-storage/async-storage";

const OrderHistory = () => {
  const [completedOrders, setCompletedOrders] = useState([]);
  const [userId, setUserId] = useState(null);
  const [status, setStatus] = useState("completed");
  const navigation = useNavigation();

  // Lấy userId từ AsyncStorage
  useEffect(() => {
    const fetchUserId = async () => {
      const storedUserId = await AsyncStorage.getItem("userId");
      setUserId(storedUserId);
    };
    fetchUserId();
  }, []);

  // Lấy danh sách đơn hàng đã hoàn thành và lọc theo userId
  useEffect(() => {
    const fetchCompletedOrders = async () => {
      try {
        const response = await getOrderCompleted();
        console.log("API Response for completed orders:", response);
        if (response && response.items) {
          // Lọc các đơn hàng có accountId === userId
          const filteredOrders = response.items.filter(
            (order) => order.accountId === userId
          );
          setCompletedOrders(filteredOrders);
        } else {
          setCompletedOrders([]);
        }
      } catch (error) {
        console.error("Error fetching completed orders: ", error);
      }
    };

    if (userId) {
      fetchCompletedOrders();
    }
  }, [userId]);

  const handleGetOrderDetails = async (orderId) => {
    try {
      console.log("Fetching details for order ID:", orderId);
      // Handle navigation to order details page if needed
    } catch (error) {
      console.error("Error fetching order details: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <TouchableOpacity
          style={styles.statusButton}
          onPress={() => setStatus("completed")}
        >
          <Text style={styles.statusText}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.statusButton}
          onPress={() => setStatus("canceled")}
        >
          <Text style={styles.statusText}>Canceled</Text>
        </TouchableOpacity>
      </View>

      {status === "completed" && (
        <>
          {Array.isArray(completedOrders) && completedOrders.length > 0 ? (
            completedOrders.map((order) => (
              <TouchableOpacity
                key={order.orderId}
                style={styles.orderCard}
                onPress={() => handleGetOrderDetails(order.orderId)}
              >
                <View style={styles.imageContainer}>
                  <Image source={labubu} style={styles.image} />
                </View>
                <View>
                  <Text
                    style={styles.title}
                  >{`Order ID: ${order.orderCode}`}</Text>
                  <Text style={styles.text}>Size S</Text>
                  <View style={styles.subTotal}>
                    <Text
                      style={styles.price}
                    >{`${order.priceTotal} VND`}</Text>
                    <Text style={styles.text}> * 1</Text>
                  </View>
                  <View style={styles.totalContainer}>
                    <Text style={styles.totalLabel}>Total:</Text>
                    <Text style={styles.total}>
                      {" "}
                      {`${order.priceTotal} VND`}{" "}
                    </Text>
                  </View>
                  <View style={styles.received}>
                    <Text style={styles.receivedText}>Status: </Text>
                    <Text style={[styles.receivedText, { fontWeight: "bold" }]}>
                      Delivered
                    </Text>
                  </View>
                  {status === "completed" && (
                    <TouchableOpacity
                      style={styles.feedbackButton}
                      onPress={() => navigation.navigate("Feedback")}
                    >
                      <Text style={styles.feedbackText}>Give Feedback</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noOrdersText}>No completed orders</Text>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7", // Lighter background for consistency with the header
  },
  statusContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    padding: 10,
  },
  statusButton: {
    borderWidth: 0.8,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    textAlign: "center",
    color: "#FFFFFF", // Color of text inside the button (white)
    backgroundColor: "#d32f2f", // Red background matching the header
    borderColor: "#fff", // White border to stand out
  },
  statusText: {
    fontSize: 14,
    color: "#FFFFFF", // White text for better visibility
    fontWeight: "bold", // Bold text for emphasis
  },
  orderCard: {
    maxWidth: "95%",
    backgroundColor: "#FFFFFF", // White background for the order card
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
    color: "#2C3E50", // Matching header text color
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: "#0d0045", // Dark purple for additional information
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
  received: {
    flexDirection: "row",
  },
  receivedText: {
    fontSize: 14,
    color: "black",
  },
  feedbackButton: {
    backgroundColor: "#d32f2f", // Blue background for feedback button
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  feedbackText: {
    fontSize: 16,
    color: "#fff", // White text for better contrast
    fontWeight: "bold",
  },
  noOrdersText: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
    marginTop: 20,
  },
});

export default OrderHistory;
