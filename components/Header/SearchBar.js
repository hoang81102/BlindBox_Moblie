import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const SearchBar = ({ value, onChangeText }) => {
  return (
    <View style={styles.searchBar}>
      <FontAwesome name="search" size={20} color="#fff" />{" "}
      {/* Đổi màu icon thành trắng */}
      <TextInput
        style={styles.input}
        placeholder="What do you want to buy ?"
        placeholderTextColor="#f1f1f1"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
    height: 40,
    marginRight: 10,
    backgroundColor: "#a10000", // Nền đỏ nhẹ hơn
    borderRadius: 12,
    paddingHorizontal: 12, // Thêm padding trái và phải cho không gian thoải mái
    shadowColor: "#000", // Thêm bóng cho thanh tìm kiếm
    shadowOffset: { width: 0, height: 2 }, // Cải thiện bóng đổ
    shadowOpacity: 0.1, // Độ mờ của bóng
    shadowRadius: 8, // Tạo hiệu ứng bóng mềm mại
    elevation: 4, // Tạo hiệu ứng bóng cho Android
  },
  input: {
    height: "100%",
    fontSize: 16,
    fontWeight: "600",
    color: "#fff", // Màu chữ trắng để nổi bật trên nền đỏ
    flex: 1,
    paddingVertical: 4,
  },
});

export default SearchBar;
