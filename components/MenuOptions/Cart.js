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
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Checkbox } from "react-native-paper";

const { height } = Dimensions.get("window");

const Cart = () => {
  const navigation = useNavigation();

  const [items, setItems] = useState([
    { id: 1, name: "Labubu - Limited Edition", price: 365000, quantity: 1 },
    { id: 2, name: "Labubu - Limited Edition 2", price: 365000, quantity: 2 },
  ]);
  const [selectedItems, setSelectedItems] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = items.reduce(
      (sum, item) =>
        selectedItems[item.id] ? sum + item.price * item.quantity : sum,
      0
    );
    setTotalPrice(total);
  }, [items, selectedItems]);

  const handleQuantity = (id, action) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "plus"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const handleSelectItem = (id) => {
    setSelectedItems((prevSelected) => ({
      ...prevSelected,
      [id]: !prevSelected[id],
    }));
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
          {items.map((item) => (
            <View key={item.id} style={styles.cartItem}>
              <View style={styles.leftSection}>
                <Checkbox
                  status={selectedItems[item.id] ? "checked" : "unchecked"}
                  onPress={() => handleSelectItem(item.id)}
                  color="#a10000" // Set checkbox color to red
                />
                <Image source={labubu} style={styles.image} />
              </View>

              <View style={styles.rightSection}>
                <View style={styles.itemDetails}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Labubu, đen, size S"
                    placeholderTextColor="#888"
                  />
                </View>

                <View style={styles.priceAndQuantity}>
                  <Text style={styles.price}>
                    {item.price.toLocaleString()} Đ
                  </Text>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity
                      onPress={() => handleQuantity(item.id, "minus")}
                      style={styles.quantityButton}
                    >
                      <FontAwesome5 name="minus" style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => handleQuantity(item.id, "plus")}
                      style={styles.quantityButton}
                    >
                      <FontAwesome5 name="plus" style={styles.icon} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.totalPrice}>{totalPrice.toLocaleString()} Đ</Text>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => navigation.navigate("Checkout")}
          disabled={totalPrice === 0}
        >
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  header: {
    height: 140,
    backgroundColor: "#a10000", // Set header background to the main red color
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  back: {
    color: "white",
    fontSize: 22,
  },
  cart: {
    flex: 1,
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    paddingTop: 10,
  },
  listItem: {
    flex: 1,
  },
  cartItem: {
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
    minHeight: 160,
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
    color: "#2C3E50",
    marginBottom: 15,
  },
  textInput: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#DCDCDC",
    borderRadius: 8,
    fontSize: 14,
    color: "#333",
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
    color: "#2C3E50",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    paddingVertical: 5,
  },
  quantityButton: {
    paddingHorizontal: 12,
  },
  icon: {
    fontSize: 16,
    color: "#2C3E50",
  },
  footer: {
    height: 80,
    backgroundColor: "#a10000", // Footer background set to red
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF", // White text for total label to stand out
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFD700", // Yellow for total price for emphasis
  },
  checkoutButton: {
    backgroundColor: "#ffffff", // White background for checkout button
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  checkoutText: {
    color: "#a10000", // Set checkout button text to red
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Cart;
