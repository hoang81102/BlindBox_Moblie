import React from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";

const OrderSummary = ({ products }) => {
  return (
    <ScrollView style={styles.container}>
      {products.map((product) => (
        <View key={product.productId} style={styles.orderContainer}>
          {" "}
          {/* Sử dụng productId làm key */}
          <Image
            source={
              product.imageUrl
                ? { uri: String(product.imageUrl) }
                : require("../../assets/popmart.jpg")
            }
            style={styles.image}
          />
          <View style={styles.contentContainer}>
            <Text style={styles.productTitle}>{product.name}</Text>{" "}
            {/* Hiển thị tên */}
            <Text style={styles.productDescription}>
              {product.description}
            </Text>{" "}
            {/* Hiển thị mô tả */}
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{product.price} VNĐ</Text>
              <Text style={styles.quantity}> * {product.quantity}</Text>{" "}
              {/* Hiển thị số lượng */}
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexGrow: 1,
    borderBottomWidth: 0.6,
  },
  orderContainer: {
    flexDirection: "row",
    marginBottom: 20,
    borderBottomColor: "black",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 10,
    marginRight: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  contentContainer: {
    flex: 1,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#d32f2f",
    marginRight: 15,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    paddingVertical: 5,
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "space-between",
  },
  quantityButton: {
    backgroundColor: "#d32f2f",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    elevation: 3,
  },
  icon: {
    fontSize: 10,
    color: "white",
  },
  quantity: {
    fontSize: 16,
    color: "#333",
    paddingHorizontal: 8,
    fontWeight: "bold",
  },
});

export default OrderSummary;
