import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import Footer from "../components/Footer/Footer";
import { useNavigation } from "@react-navigation/native";
import avatar from "../assets/man.jpg";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const handleNavigation = (value) => {
    if (value === "Cart") {
      navigation.navigate("Cart");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Image source={avatar} style={styles.avatarImage} />
        <Text style={styles.userName}>Thi Minh Đạt</Text>
        {/* <Text style={styles.userInfoPhone}>0865689021</Text> */}
      </View>

      {/* User information */}
      <View style={styles.userProfileContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileUpdated")}>
          <Text style={styles.userInfoName}>Cập nhật hồ sơ</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.wrap} />

      {/* Menu options */}
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => {
              if (item.text === "Cart") {
                handleNavigation("Cart");
              }
            }}
          >
            <Ionicons name={item.icon} size={20} color="#2C3E50" />
            <Text style={styles.menuText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.wrap} />

      {/* Settings options */}
      <View>
        {settingsItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.settingsItem}>
            <Ionicons name={item.icon} size={20} color="#2C3E50" />
            <Text style={styles.settingsText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.wrap} />
      {/* Sign out section */}
      <View style={styles.signOut}>
        <TouchableOpacity style={styles.signOutButton}>
          <Ionicons name="log-out-outline" size={20} color="#fff" />
          <Text style={styles.signOutText}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
};

const menuItems = [
  { icon: "cart", text: "Cart" },
  { icon: "wallet", text: "Wallet" },
  { icon: "document-text", text: "Invoice Information" },
  { icon: "bookmark", text: "Address Saved" },
];

const settingsItems = [
  { icon: "file-tray", text: "Điều khoản và chính sách" },
  { icon: "headset", text: "Trung tâm hỗ trợ" },
  { icon: "business", text: "Thông tin shop" },
  { icon: "settings", text: "Cài đặt tài khoản" },
  { icon: "key", text: "Đổi mật khẩu" },
];

const styles = StyleSheet.create({
  // Header style
  headerContainer: {
    width: "100%",
    height: 140,
    backgroundColor: "#A5D8FF",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    position: "relative",
    paddingHorizontal: 20,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    resizeMode: "cover",
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  userInfoPhone: {
    fontSize: 16,
    color: "#7f8c8d",
  },

  // User Profile Section
  userProfileContainer: {
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 15,
    alignItems: "center",
  },
  userInfoName: {
    fontSize: 18,

    color: "#2C3E50",
  },

  // Spacer
  wrap: {
    backgroundColor: "#f7f7f7",
    height: 8,
  },

  // Menu Section
  menuContainer: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  menuText: {
    marginLeft: 15,
    fontSize: 16,
    color: "#2C3E50",
  },

  // Settings Section
  settingsItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    paddingLeft: 20,
  },
  settingsText: {
    marginLeft: 15,
    fontSize: 16,
    color: "#2C3E50",
  },

  // Sign out Section
  signOut: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  signOutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E74C3C",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  signOutText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#fff",
  },

  // Footer
  footer: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingVertical: 10,
    alignItems: "center",
  },
});

export default ProfileScreen;
