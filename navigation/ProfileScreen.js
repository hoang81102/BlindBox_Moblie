import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import background from "../assets/Profile.png";
import { FontAwesome5 } from "@expo/vector-icons";
import Footer from "../components/Footer/Footer";
const ProfileScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Image source={background} style={styles.image} />
        <View style={styles.priceContainer}>
          <Text style={styles.price}>1.650.000 VNĐ</Text>
        </View>
      </View>

      {/* User information */}
      <View style={styles.userInfoContainer}>
        <TouchableOpacity>
          <Text style={styles.userInfoName}>Thi Minh Đạt</Text>
          <Text style={styles.userInfoPhone}>0865689021</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.wrap} />

      {/* Menu options */}
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <FontAwesome5 name={item.icon} size={20} color="#000" />
            <Text style={styles.menuText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.wrap} />

      {/* Settings options */}
      <View>
        {settingsItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.settingsItem}>
            <FontAwesome5 name={item.icon} size={20} />
            <Text style={styles.settingsText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.wrap} />
      {/* Sign out section */}
      <View style={styles.signOut}>
        <TouchableOpacity style={styles.signOutButton}>
          <FontAwesome5 name="sign-out-alt" size={20} />
          <Text style={styles.signOutText}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Footer />
      </View>
    </View>
  );
};

const menuItems = [
  { icon: "shopping-cart", text: "Giỏ hàng" },
  { icon: "wallet", text: "Quản lý thanh toán" },
  { icon: "file-invoice", text: "Thông tin hoá đơn" },
  { icon: "bookmark", text: "Địa chỉ đã lưu" },
];

const settingsItems = [
  { icon: "file-contract", text: "Điều khoản và chính sách" },
  { icon: "headset", text: "Trung tâm hỗ trợ" },
  { icon: "building", text: "Thông tin shop" },
  { icon: "cog", text: "Cài đặt tài khoản" },
  { icon: "key", text: "Đổi mật khẩu" },
];

const styles = StyleSheet.create({
  // Header style (image and price)
  header: {
    width: "100%",
    height: 200,
    borderWidth: 1,
    position: "relative",
  },
  image: {
    width: "100%",
    height: 200,
  },
  priceContainer: {
    position: "absolute",
    bottom: 28,
    left: 28,
    paddingVertical: 5,
  },
  price: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  // User info section
  userInfoContainer: {
    paddingHorizontal: 20,
    borderBottomWidth: 0.2,
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
  },
  userInfoName: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  userInfoPhone: {
    fontSize: 16,
    marginVertical: 2,
  },

  // Spacer between sections
  wrap: {
    backgroundColor: "#c6bdc0",
    height: 10,
  },

  // Menu section styles
  menuContainer: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  menuText: {
    marginLeft: 10,
    fontSize: 16,
  },

  // Settings section styles
  settingsItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
    paddingLeft: 20,
  },
  settingsText: {
    marginLeft: 10,
    fontSize: 16,
  },

  // Sign out section styles
  signOut: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 70,
    // backgroundColor: "red",
  },
  signOutButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  signOutText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default ProfileScreen;
