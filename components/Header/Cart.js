import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
const Cart = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <FontAwesome5 name="shopping-basket" size={18} color="black" style />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Cart;
