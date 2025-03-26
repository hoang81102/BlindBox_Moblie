import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CheckoutFooter = ({
  subtotal,
  shippingFee,
  discount,
  total,
  onCheckout,
}) => {
  const totalPrice = subtotal + shippingFee - discount;

  return (
    <View style={styles.container}>
      <View style={styles.priceDetails}>
        <View style={styles.row}>
          <Text style={styles.label}>Subtotal:</Text>
          <Text style={styles.amount}>{subtotal.toLocaleString()} VNĐ</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Shipping Fee:</Text>
          <Text style={styles.amount}>{shippingFee.toLocaleString()} VNĐ</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Discount:</Text>
          <Text style={styles.amount}>- {discount.toLocaleString()} VNĐ</Text>
        </View>
        <View style={styles.divider} />

        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalAmount}>
            {totalPrice.toLocaleString()} VNĐ
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.checkoutButton}
        activeOpacity={0.7}
        onPress={onCheckout}
      >
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: "column",
    paddingHorizontal: 20,
  },
  priceDetails: {
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    color: "#555",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginVertical: 8,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default CheckoutFooter;
