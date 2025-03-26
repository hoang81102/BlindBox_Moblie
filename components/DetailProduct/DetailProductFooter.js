import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DetailProductFooter = ({
  productId,
  handleAddToCart,
  handleCheckout,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerComponent}>
        <TouchableOpacity
          style={styles.CartButton}
          activeOpacity={0.7}
          onPress={() => handleAddToCart()}
        >
          <Ionicons name="cart-outline" style={styles.CartButtonIcon} />
          <Text style={styles.cartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.checkoutButton}
          activeOpacity={0.7}
          onPress={() => handleCheckout()}
        >
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 70,
    backgroundColor: "#d32f2f",
    paddingVertical: 17,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingHorizontal: 15,
    position: "relative",
    bottom: 0,
  },

  footerComponent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  CartButton: {
    backgroundColor: "#f8f8f8",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    marginRight: 15,
    width: "48%",
  },
  cartButtonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  checkoutButton: {
    backgroundColor: "#a10000",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    width: "48%",
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  CartButtonIcon: {
    fontSize: 20,
    color: "#a10000",
  },
});

export default DetailProductFooter;
