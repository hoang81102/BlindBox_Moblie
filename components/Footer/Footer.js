import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "react-native-vector-icons"; // Sử dụng Ionicons
import { useNavigation, useRoute } from "@react-navigation/native"; // Thêm useRoute

const Footer = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Để lấy thông tin màn hình hiện tại

  const [selectedIcon, setSelectedIcon] = useState(route.name); // Khởi tạo trạng thái bằng tên route hiện tại

  useEffect(() => {
    setSelectedIcon(route.name); // Cập nhật khi màn hình thay đổi
  }, [route.name]); // Dựa vào thay đổi của route để cập nhật

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          setSelectedIcon("home");
          navigation.navigate("Home");
        }}
      >
        <Ionicons
          name="home"
          size={25}
          color={selectedIcon === "home" ? "#4A90E2" : "black"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          setSelectedIcon("activity");
          navigation.navigate("Activity");
        }}
      >
        <Ionicons
          name="time"
          size={25}
          color={selectedIcon === "activity" ? "#4A90E2" : "black"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          setSelectedIcon("cart");
          navigation.navigate("Cart");
        }}
      >
        <Ionicons
          name="cart"
          size={25}
          color={selectedIcon === "cart" ? "#4A90E2" : "black"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          setSelectedIcon("profile");
          navigation.navigate("Profile");
        }}
      >
        <Ionicons
          name="person"
          size={25}
          color={selectedIcon === "profile" ? "#4A90E2" : "black"}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    // Thêm shadow cho phần trên của footer (iOS)
    shadowColor: "#000", // Màu của shadow
    shadowOffset: { width: 0, height: -2 }, // Đẩy shadow lên trên
    shadowOpacity: 0.2, // Độ mờ của shadow
    shadowRadius: 3, // Độ lan tỏa của shadow
    // Thêm shadow cho Android
    elevation: 5, // Độ đậm của shadow trên Android
  },
  icon: {
    padding: 10,
  },
});

export default Footer;
