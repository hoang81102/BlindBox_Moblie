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
          size={30}
          color={selectedIcon === "home" ? "#ffffff" : "#f0f0f0"} // Màu sáng khi chọn
          style={selectedIcon === "home" ? styles.selectedIcon : null} // Thêm hiệu ứng khi chọn
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
          size={30}
          color={selectedIcon === "activity" ? "#ffffff" : "#f0f0f0"} // Màu sáng khi chọn
          style={selectedIcon === "activity" ? styles.selectedIcon : null} // Thêm hiệu ứng khi chọn
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
          size={30}
          color={selectedIcon === "cart" ? "#ffffff" : "#f0f0f0"} // Màu sáng khi chọn
          style={selectedIcon === "cart" ? styles.selectedIcon : null} // Thêm hiệu ứng khi chọn
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
          size={30}
          color={selectedIcon === "profile" ? "#ffffff" : "#f0f0f0"} // Màu sáng khi chọn
          style={selectedIcon === "profile" ? styles.selectedIcon : null} // Thêm hiệu ứng khi chọn
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    backgroundColor: "#a10000", // Màu nền footer đậm hơn để tạo độ tương phản
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
    shadowOpacity: 0.3, // Độ mờ của shadow
    shadowRadius: 3, // Độ lan tỏa của shadow
    // Thêm shadow cho Android
    elevation: 5, // Độ đậm của shadow trên Android
  },
  icon: {
    padding: 10,
  },
  selectedIcon: {
    transform: [{ scale: 1.2 }], // Phóng to icon khi chọn
  },
});

export default Footer;
