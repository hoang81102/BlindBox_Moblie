import React, { useState, useEffect } from "react";
import { View, ToastAndroid } from "react-native";
import DetailProductHeader from "./DetailProductHeader";
import DetailProductBody from "./DetailProductBody";
import DetailProductFooter from "./DetailProductFooter";
import { AddToCart } from "../../services/CartService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import dimoo from "../../assets/dimoo.jpg";
const DetailProduct = ({
  productId,
  name,
  type,
  price,
  description,
  imageUrl,
  stock,
}) => {
  const [selectedSize, setSelectedSize] = useState("100%");
  const [quantity, setQuantity] = useState(1);
  const [userId, setUserId] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserId = async () => {
      const storeUserId = await AsyncStorage.getItem("userId");
      setUserId(storeUserId);
    };
    fetchUserId();
  }, []);

  const handleAddToCart = async () => {
    try {
      if (userId) {
        if (type === "BlindBox" || type === "Package") {
          const data = await AddToCart(
            userId,
            type === "BlindBox" ? productId : null,
            type === "Package" ? productId : null,
            quantity
          );
          ToastAndroid.show(
            "Added to cart successfully!",
            ToastAndroid.SHORT,
            ToastAndroid.TOP
          );
          console.log("Message Api:  ", data);
        } else {
          ToastAndroid.show(
            "Invalid product type!",
            ToastAndroid.SHORT,
            ToastAndroid.TOP
          );
        }
      } else {
        console.log("User ID không tồn tại!");
      }
    } catch (error) {
      console.error("Lỗi khi thêm vào giỏ hàng:", error);
    }
  };

  const handleCheckout = () => {
    // Kiểm tra và chuẩn hóa imageUrl
    const validImageUrl =
      imageUrl && typeof imageUrl === "string" && !isNaN(imageUrl) === false
        ? imageUrl
        : dimoo;

    // Kiểm tra và chuẩn hóa name và description
    const validName = name || "No name available";
    const validDescription = description || "No description available";

    const productData = {
      productId,
      name: validName,
      type,
      price,
      quantity,
      description: validDescription,
      imageUrl: String(validImageUrl),
      source: "detail", // Đảm bảo source là 'detail'
    };
    console.log("Detail Product: ", productData);
    navigation.navigate("Checkout", {
      products: [productData], // Gửi sản phẩm đến Checkout
    });
  };

  return (
    <View>
      <DetailProductHeader />
      <DetailProductBody
        productId={productId}
        type={type}
        imageUrl={imageUrl}
        name={name}
        price={price}
        description={description}
        quantity={quantity}
        setQuantity={setQuantity}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        stock={stock}
      />
      <DetailProductFooter
        productId={productId}
        handleAddToCart={handleAddToCart}
        handleCheckout={handleCheckout}
      />
    </View>
  );
};

export default DetailProduct;
