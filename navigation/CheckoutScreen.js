import React from "react";
import { View, Image } from "react-native";
import Checkout from "../components/Checkout/Checkout";
import dimoo from "../assets/dimoo.jpg";

const CheckoutScreen = ({ route }) => {
  const products = route.params?.products || [];

  console.log("data trước khi chuẩn hoá: ", products);

  // Chuẩn hóa dữ liệu để OrderSummary có thể sử dụng
  const normalizedProducts = products.map((product) => {
    const isBlindBox = product.blindBoxId || product.cartId; // Kiểm tra BlindBox
    const isPackage = product.packageId; // Kiểm tra Package

    let imageUrl = String(product.imageUrl) || dimoo;

    if (typeof imageUrl === "number") {
      imageUrl = dimoo;
    }

    return {
      blindBoxId: product.productId || product.cartId || null,
      name: product.name || "No description",
      description: product.description || "No description",
      imageUrl,
      price: product.price,
      quantity: product.quantity,
      source: product.source || "unknown",
      type: product.type,
    };
  });

  console.log("CheckoutScreen: ", normalizedProducts);

  return (
    <View>
      <Checkout products={normalizedProducts} />
    </View>
  );
};

export default CheckoutScreen;
