import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Import FontAwesome5

const ServiceList = ({ icon, title }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card}>
        <FontAwesome5 name={icon} size={34} color="#fff" />{" "}
        {/* Màu icon sáng để nổi bật trên nền */}
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 10,
  },
  card: {
    paddingTop: 10,
    borderWidth: 1,
    borderColor: "#ff8f6d", // Màu viền hài hòa với nền
    borderRadius: 18,
    marginRight: 16,
    width: 100,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a10000", // Màu cam nhẹ và hài hòa
    transform: [{ scale: 1 }],
    transition: "transform 0.2s ease-in-out", // Hiệu ứng chuyển động mượt mà
    paddingHorizontal: 10,
  },
  cardHovered: {
    transform: [{ scale: 1.05 }],
  },
  icon: {
    marginTop: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 8,
    paddingHorizontal: 8,
    color: "#fff", // Màu chữ trắng để dễ đọc trên nền cam đỏ
    textAlign: "center",
    marginBottom: 10,
  },
});

export default ServiceList;
