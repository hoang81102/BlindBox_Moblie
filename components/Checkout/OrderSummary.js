import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import labubu from "../../assets/labubu.png";
import { FontAwesome5 } from "@expo/vector-icons";

const OrderSummary = () => {
  // State lưu trữ danh sách các đơn hàng
  const [orders, setOrders] = useState([
    {
      id: 1,
      title: "Labubu - Limited Edition",
      description: "Product got by package A",
      price: "125.000 VNĐ",
      quantity: 1,
    },
  ]);

  // Cập nhật số lượng của một đơn hàng cụ thể
  const handleQuantity = (id, value) => {
    setOrders((prevOrders) => {
      return prevOrders.map((order) => {
        if (order.id === id) {
          return {
            ...order,
            quantity:
              value === "plus"
                ? order.quantity + 1
                : order.quantity - 1 < 1
                ? 1
                : order.quantity - 1,
          };
        }
        return order;
      });
    });
  };

  return (
    <ScrollView style={styles.container}>
      {orders.map((order) => (
        <View key={order.id} style={styles.orderContainer}>
          <Image source={labubu} style={styles.image} />
          <View style={styles.contentContainer}>
            <Text style={styles.productTitle}>{order.title}</Text>
            <Text style={styles.productDescription}>{order.description}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{order.price}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  onPress={() => handleQuantity(order.id, "minus")}
                  style={styles.quantityButton}
                >
                  <FontAwesome5 name="minus" style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.quantity}>{order.quantity}</Text>
                <TouchableOpacity
                  onPress={() => handleQuantity(order.id, "plus")}
                  style={styles.quantityButton}
                >
                  <FontAwesome5 name="plus" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexGrow: 1,
    borderBottomWidth: 0.6,
  },
  orderContainer: {
    flexDirection: "row",
    marginBottom: 20,
    borderBottomColor: "black",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 10,
    marginRight: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  contentContainer: {
    flex: 1,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#d32f2f",
    marginRight: 15,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    paddingVertical: 5,
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "space-between",
  },
  quantityButton: {
    backgroundColor: "#d32f2f",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    elevation: 3,
  },
  icon: {
    fontSize: 10,
    color: "white",
  },
  quantity: {
    fontSize: 16,
    color: "#333",
    paddingHorizontal: 8,
    fontWeight: "bold",
  },
});

export default OrderSummary;
