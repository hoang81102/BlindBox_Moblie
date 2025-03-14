import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CheckoutFooter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.component}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total: </Text>
          <Text style={styles.totalAmount}>125.000 VNĐ</Text>
        </View>

        <TouchableOpacity style={styles.checkoutButton} activeOpacity={0.7}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 17,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: "column",
  },
  component: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    // alignItems: "center",
  },
  totalContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    paddingTop: 10,
    flex: 1, // Chiếm không gian còn lại
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#d32f2f",
  },
  checkoutButton: {
    backgroundColor: "#a00000",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3, // Tạo bóng cho nút
    shadowColor: "#000", // Màu bóng
    shadowOffset: { width: 0, height: 5 }, // Vị trí bóng
    shadowOpacity: 0.2, // Độ mờ của bóng
    shadowRadius: 10, // Độ lan tỏa của bóng
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default CheckoutFooter;
