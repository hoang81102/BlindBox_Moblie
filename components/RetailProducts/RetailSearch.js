import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RetailSearch = () => {
  const [value, setValue] = useState(""); // Quản lý trạng thái cho giá trị của TextInput
  const navigation = useNavigation();

  const onChangeText = (text) => {
    setValue(text); // Cập nhật giá trị khi người dùng nhập văn bản
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <FontAwesome5 name="chevron-left" size={20} color="#a10000" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="What are you searching?"
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: "#f1f1f1", // Nền màu trắng để nổi bật phần tìm kiếm
    borderRadius: 10, // Bo tròn các góc
  },
  backButton: {
    marginRight: 10, // Khoảng cách giữa nút quay lại và TextInput
  },
  input: {
    borderWidth: 1,
    borderColor: "red",
    flex: 1,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#f1f1f1", // Màu nền sáng cho TextInput
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333", // Màu chữ đậm dễ đọc
  },
});

export default RetailSearch;
