import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.navigate("Home")}
      >
        <FontAwesome5 name="home" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.navigate("Activity")}
      >
        <FontAwesome5 name="clock" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.navigate("Notification")}
      >
        <FontAwesome5 name="bell" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.navigate("Profile")}
      >
        <FontAwesome5 name="user" size={20} color="black" />
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
