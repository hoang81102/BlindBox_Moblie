import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import labubu from "../../assets/labubu.png"; // Sử dụng hình ảnh mẫu
import { useNavigation } from "@react-navigation/native";

const DetailProductBody = ({
  productId,
  imageUrl,
  name,
  price,
  description,
  stock,
  type,
  setSelectedSize,
  selectedSize,
  setQuantity,
  quantity,
  handleAddToCart, // Nhận hàm xử lý thêm vào giỏ hàng
}) => {
  const navigation = useNavigation();

  // Cập nhật số lượng của sản phẩm
  const handleQuantity = (value) => {
    setQuantity((prevQuantity) =>
      value === "plus"
        ? prevQuantity + 1
        : prevQuantity - 1 < 1
        ? 1
        : prevQuantity - 1
    );
  };

  return (
    <View style={styles.component}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>{name}</Text>
          <Ionicons name="heart-outline" style={styles.icon} size={20} />
        </View>
        <View style={styles.priceInfo}>
          <Text style={styles.productPrice}>{price} VNĐ</Text>
          <Text style={styles.vatInfo}>VAT 10%</Text>
          <TouchableOpacity
            style={styles.feedbackLink}
            onPress={() =>
              navigation.navigate("ProductFeedback", {
                type: type,
                productId: productId,
              })
            }
          >
            <Text style={styles.feedbackText}>Feedback</Text>
          </TouchableOpacity>
        </View>

        {/* Size Selector */}
        <View style={styles.sizeSelector}>
          <Text style={styles.sizeTitle}>Select Size</Text>
          <View style={styles.sizeOptions}>
            {["100%", "200%", "300%", "1000%"].map((size) => (
              <TouchableOpacity
                key={size}
                style={[
                  styles.sizeOption,
                  selectedSize === size && styles.selectedSize,
                ]}
                onPress={() => setSelectedSize(size)}
              >
                <Text style={styles.sizeText}>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.sizeDescription}>
            {selectedSize === "100%" ? "Size nguyên bản" : ""}
            {selectedSize === "200%" ? "Size gấp đôi so với nguyên bản" : ""}
            {selectedSize === "300%" ? "Size gấp ba so với nguyên bản" : ""}
            {selectedSize === "1000%" ? "Size khổng lồ so với nguyên bản" : ""}
          </Text>
        </View>

        {/* Product Description */}
        <View style={styles.description}>
          <Text style={styles.descriptionTitle}>Description Product</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>

        {/* Quantity Adjuster */}
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityText}>Quantity:</Text>
          <TouchableOpacity
            onPress={() => handleQuantity("minus")}
            style={styles.quantityButton}
          >
            <FontAwesome5 name="minus" style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity
            onPress={() => handleQuantity("plus")}
            style={styles.quantityButton}
          >
            <FontAwesome5 name="plus" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    paddingBottom: 32,
  },
  container: {
    flexDirection: "column",
  },
  imageContainer: {
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 240,
    resizeMode: "cover",
  },
  productInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#a10000",
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  priceInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "bold",
  },
  vatInfo: {
    marginLeft: 10,
    fontSize: 14,
    backgroundColor: "#d32f2f",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 25,
    color: "white",
    fontWeight: "bold",
  },
  description: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#a10000",
  },
  descriptionText: {
    color: "#333",
    fontSize: 14,
    lineHeight: 22,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    paddingHorizontal: 15,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 600,
  },
  quantityButton: {
    backgroundColor: "#f8f8f8",
    padding: 4,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    elevation: 3,
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  icon: {
    fontSize: 12,
    color: "#a10000",
  },
  sizeSelector: {
    paddingHorizontal: 15,
  },
  sizeTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#a10000",
  },
  sizeOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  sizeOption: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    alignItems: "center",
  },
  selectedSize: {
    backgroundColor: "#d32f2f",
  },
  sizeText: {
    fontSize: 14,
    color: "#333",
  },
  sizeDescription: {
    marginTop: 10,
    fontSize: 12,
    color: "gray",
  },
  feedbackLink: {
    marginLeft: 10,
    alignItems: "center",
  },
  feedbackText: {
    fontSize: 16,
    color: "#d32f2f",
    textDecorationLine: "underline",
  },
});

export default DetailProductBody;
