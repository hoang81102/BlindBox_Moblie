import { FontAwesome5 } from "@expo/vector-icons";
import labubu from "../../assets/labubu.png";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Checkbox } from "react-native-paper";

const { height } = Dimensions.get("window");

const Cart = () => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);
  const [isSelected, setIsSelected] = useState(false);

  // Thêm một danh sách các mặt hàng trong giỏ hàng (dùng để tính tổng giá)
  const items = [
    { id: 1, name: "Labubu - Limited Edition", price: 365000, quantity: 2 },
    { id: 2, name: "Labubu - Limited Edition2", price: 365000, quantity: 1 },
  ];

  // Tính tổng giá
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantity = (value) => {
    setQuantity((prevQuantity) => {
      if (value === "plus") {
        return prevQuantity + 1;
      }
      if (value === "minus" && prevQuantity > 1) {
        return prevQuantity - 1;
      }
      return prevQuantity;
    });
  };

  const paddingBottom = height - 80 - 100;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.cart}>My Cart</Text>
      </View>

      <ScrollView
        style={[styles.scrollView, { paddingBottom }]}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.listItem}>
          {/* item 1 */}
          <View style={styles.cartItem}>
            <View style={styles.leftSection}>
              <Checkbox
                status={isSelected ? "checked" : "unchecked"}
                onPress={() => setIsSelected(!isSelected)}
                color="#0d0045"
              />
              <Image source={labubu} style={styles.image} />
            </View>

            <View style={styles.rightSection}>
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>Labubu - Limited Edition</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Labubu, đen, size S"
                  placeholderTextColor="#888"
                />
              </View>

              <View style={styles.priceAndQuantity}>
                <Text style={styles.price}>365.000Đ</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    onPress={() => handleQuantity("minus")}
                    style={styles.quantityButton}
                  >
                    <FontAwesome5 name="minus" style={styles.icon} />
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{quantity}</Text>
                  <TouchableOpacity
                    onPress={() => handleQuantity("plus")}
                    style={styles.quantityButton}
                  >
                    <FontAwesome5 name="plus" style={styles.icon} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.totalPrice}>{totalPrice.toLocaleString()} Đ</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7", // Lighter background for consistency
  },
  header: {
    height: 140,
    // backgroundColor: "white",
    backgroundColor: "#A5D8FF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  back: {
    color: "black",
    fontSize: 22,
  },
  cart: {
    flex: 1,
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#F7F7F7", // Light background color, similar to CurrentOrders

    paddingTop: 10,
  },
  scrollContent: {
    flexGrow: 1,
    // paddingHorizontal: 15,
  },
  listItem: {
    flex: 1,
  },
  cartItem: {
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
    maxHeight: 200, // Prevent the item from being too tall
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  rightSection: {
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    resizeMode: "cover",
  },
  itemDetails: {
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C3E50", // Dark blue for text
    marginBottom: 15,
    whiteSpace: "nowrap", // Ngăn không cho văn bản xuống dòng
    overflow: "hidden", // Ẩn phần văn bản vượt ra ngoài
    textOverflow: "ellipsis", // Hiển thị "..." khi văn bản quá dài
    maxWidth: "100%",
  },

  textInput: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#DCDCDC", // Lighter gray border color
    borderRadius: 8,
    fontSize: 14,
    color: "#333",
    marginBottom: 10, // Added some space between text input and next section
  },
  priceAndQuantity: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2C3E50", // Dark blue for the price to match overall theme
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // Light gray background for the quantity container
    borderRadius: 8,
    paddingVertical: 5,
  },
  quantityButton: {
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  icon: {
    fontSize: 16,
    color: "#2C3E50", // Dark blue for icons
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2C3E50", // Dark blue text for quantity, same as item name and price
    marginHorizontal: 10,
  },
  // Footer
  footer: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 80,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    // color: "#FF914D",
    color: "#E74C3C",
  },
  checkoutButton: {
    backgroundColor: "#0d0045",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  checkoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Cart;
