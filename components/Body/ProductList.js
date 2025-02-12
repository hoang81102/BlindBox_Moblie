import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";

const ProductList = ({ imageSource, title }) => {
  return (
    <View>
      <TouchableOpacity style={styles.card}>
        <Image source={imageSource} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: "#ddd",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // Độ sâu bóng đổ trên Android
    marginRight: 16, // Tạo khoảng cách giữa các thẻ khi hiển thị ngang
    width: 80, // Cố định chiều rộng thẻ
    height: 80,
    alignItems: "center", // Căn giữa nội dung trong thẻ
  },
  image: {
    width: "100%",
    height: 80,
    resizeMode: "cover",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 7,
    marginBottom: 20,
  },
});

export default ProductList;
