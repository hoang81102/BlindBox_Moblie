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
import { getOrderConfirmed } from "../../services/OrderService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ConfirmedOrder = () => {
  const [confirmedOrders, setConfirmedOrders] = useState([]);
  const [userId, setUserId] = useState(null);

  // Lấy userId từ AsyncStorage
  useEffect(() => {
    const fetchUserId = async () => {
      const storedUserId = await AsyncStorage.getItem("userId");
      setUserId(storedUserId);
    };
    fetchUserId();
  }, []);

  useEffect(() => {
    const fetchConfirmedOrders = async () => {
      try {
        const response = await getOrderConfirmed();
        console.log("API Response for confirmed orders:", response);
        if (response && response.items) {
          // Lọc các đơn hàng có accountId === userId
          const filteredOrders = response.items.filter(
            (order) => order.accountId === userId
          );
          setConfirmedOrders(filteredOrders);
        } else {
          setConfirmedOrders([]);
        }
      } catch (error) {
        console.error("Error fetching confirmed orders: ", error);
      }
    };

    if (userId) {
      fetchConfirmedOrders(); // Chỉ gọi API nếu userId đã có
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
      {Array.isArray(confirmedOrders) && confirmedOrders.length > 0 ? (
        confirmedOrders.map((order) => (
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
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.noOrdersText}>No confirmed orders</Text>
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
  noOrdersText: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
    marginTop: 20,
  },
});

export default ConfirmedOrder;
