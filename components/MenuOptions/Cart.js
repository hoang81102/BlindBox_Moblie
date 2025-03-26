import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  getItemsInCartByUserId,
  getInformationBlindBoxById,
  getInformationPackageById,
} from "../../services/CartService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { height } = Dimensions.get("window");

const Cart = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState([]); // Dữ liệu giỏ hàng từ API
  const [selectedItems, setSelectedItems] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  // Lấy giỏ hàng từ API khi component mount
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        if (userId) {
          const cartData = await getItemsInCartByUserId(userId);
          const updatedItems = await Promise.all(
            cartData.map(async (item) => {
              let productDetails;
              // Kiểm tra blindBoxId và packageId
              if (item.blindBoxId) {
                productDetails = await getInformationBlindBoxById(
                  item.blindBoxId
                );
              } else if (item.packageId) {
                productDetails = await getInformationPackageById(
                  item.packageId
                );
              }

              const normalizedItem = {
                cartId: item.cartId,
                quantity: item.quantity,
                price: productDetails?.price || productDetails?.packagePrice, // Nếu có giá, dùng giá đó
                name:
                  productDetails?.blindBoxName || productDetails?.packageName, // Tên sản phẩm
                description: productDetails?.description || "", // Mô tả sản phẩm
                image:
                  productDetails?.blindBoxImages?.[0] ||
                  productDetails?.packageImages?.[0] ||
                  null,
              };

              return normalizedItem;
            })
          );
          setItems(updatedItems);
        }
      } catch (error) {
        console.error("Lỗi lấy giỏ hàng:", error);
      }
    };
    fetchCart();
  }, []);

  // Tính tổng tiền của các sản phẩm được chọn
  useEffect(() => {
    const total = items.reduce(
      (sum, item) =>
        selectedItems[item.cartId] ? sum + item.price * item.quantity : sum,
      0
    );
    setTotalPrice(total);
  }, [items, selectedItems]);

  // Xử lý tăng/giảm số lượng
  const handleQuantity = (cartId, action) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.cartId === cartId) {
          let newQuantity =
            action === "plus" ? item.quantity + 1 : item.quantity - 1;
          if (newQuantity <= 0) {
            Alert.alert(
              "Xác nhận",
              "Số lượng là 0, bạn có muốn xóa sản phẩm này không?",
              [
                { text: "Hủy", style: "cancel" },
                {
                  text: "Xóa",
                  onPress: () => handleRemoveItem(cartId),
                },
              ]
            );
            return item;
          }
          return { ...item, quantity: newQuantity }; // Số lượng thay đổi trong state
        }
        return item;
      })
    );
  };

  // Xử lý xóa sản phẩm khỏi giỏ hàng
  const handleRemoveItem = (cartId) => {
    setItems((prevItems) => prevItems.filter((item) => item.cartId !== cartId));
  };

  // Chọn/bỏ chọn sản phẩm
  const handleSelectItem = (cartId) => {
    setSelectedItems((prevSelected) => ({
      ...prevSelected,
      [cartId]: !prevSelected[cartId],
    }));
  };

  const handleCheckout = () => {
    const selectedProducts = items.filter((item) => selectedItems[item.cartId]);

    if (selectedProducts.length === 0) {
      Alert.alert(
        "Thông báo",
        "Vui lòng chọn ít nhất một sản phẩm để thanh toán."
      );
      return;
    }

    // Chuyển các sản phẩm đã chọn sang Checkout với thông tin nguồn "cart"
    navigation.navigate("Checkout", {
      products: selectedProducts.map((product) => ({
        ...product,
        source: "cart", // Đánh dấu nguồn là "cart"
      })),
    });
  };

  const paddingBottom = height - 80 - 100;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.cart}>Giỏ hàng của tôi</Text>
      </View>

      <ScrollView
        style={[styles.scrollView, { paddingBottom }]}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.listItem}>
          {items.map((item) => (
            <View key={item.cartId} style={styles.cartItem}>
              <View style={styles.leftSection}>
                <Checkbox
                  status={selectedItems[item.cartId] ? "checked" : "unchecked"}
                  onPress={() => handleSelectItem(item.cartId)}
                  color="#a10000"
                />
                <Image
                  source={
                    item.image
                      ? { uri: String(item.image) }
                      : require("../../assets/popmart.jpg")
                  }
                  style={styles.image}
                />
              </View>

              <View style={styles.rightSection}>
                <View style={styles.itemDetails}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.price}>
                    {item.price ? item.price.toLocaleString() : "Giá chưa có"} Đ
                  </Text>
                  {/* Hiển thị description của sản phẩm */}
                  <Text style={styles.description}>{item.description}</Text>
                </View>

                <View style={styles.priceAndQuantity}>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity
                      onPress={() => handleQuantity(item.cartId, "minus")}
                      style={styles.quantityButton}
                    >
                      <FontAwesome5 name="minus" style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => handleQuantity(item.cartId, "plus")}
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
        <Text style={styles.totalLabel}>Tổng tiền:</Text>
        <Text style={styles.totalPrice}>{totalPrice.toLocaleString()} Đ</Text>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={handleCheckout}
          disabled={totalPrice === 0}
        >
          <Text style={styles.checkoutText}>Thanh toán</Text>
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
