import React from "react";
import SearchBar from "./SearchBar";
import Notification from "./Notification";
import { View, StyleSheet, Text } from "react-native";
import Background from "./Background";

const Header = () => {
  return (
    <View style={styles.container}>
      <Background />
      <View style={styles.gradientBackground}>
        <Text style={styles.text}> Hello, Thi Minh Đạt </Text>
        <View style={styles.filter}>
          <SearchBar />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 250,
    position: "absolute",
    top: 0,
  },
  gradientBackground: {
    justifyContent: "center",
    alignItems: "flex-start",
    transform: [{ scale: 1.05 }], // Thêm hiệu ứng scale nhẹ
    paddingHorizontal: 15, // Thêm padding trái và phải cho filter
  },
  text: {
    fontSize: 18, // Tăng kích thước chữ cho nổi bật
    fontWeight: "700", // Làm cho chữ đậm hơn
    marginLeft: 5,
    // color: "#ff8153",
    color: "#940000",
  },
  filter: {
    width: "100%",
    height: "20%",
    flexDirection: "row",
    justifyContent: "space-between", // Để các phần tử trong filter được căn đều
    marginTop: 10, // Thêm khoảng cách trên filter
  },
});

export default Header;
