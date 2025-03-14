import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-paper"; // Dùng Checkbox từ react-native-paper

const Delivery = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Select Shipping</Text>
      </View>

      <TouchableOpacity
        style={[
          styles.optionContainer,
          selectedOption === "GHN" && styles.optionContainerActive,
        ]}
        activeOpacity={0.8}
        onPress={() => handleSelectOption("GHN")}
      >
        <Checkbox
          status={selectedOption === "GHN" ? "checked" : "unchecked"} // Sử dụng status để chọn
          onPress={() => handleSelectOption("GHN")}
        />
        <View style={styles.optionDetails}>
          <Text style={styles.optionTitle}>GHN Express</Text>
          <Text style={styles.optionDescription}>
            Estimated arrival for 3 - 5 days
          </Text>
        </View>
        <Text style={styles.price}>50.000 VNĐ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.optionContainer,
          selectedOption === "Store" && styles.optionContainerActive,
        ]}
        activeOpacity={0.8}
        onPress={() => handleSelectOption("Store")}
      >
        <Checkbox
          status={selectedOption === "Store" ? "checked" : "unchecked"} // Sử dụng status để chọn
          onPress={() => handleSelectOption("Store")}
        />
        <View style={styles.optionDetails}>
          <Text style={styles.optionTitle}>Pick at store</Text>
          <Text style={styles.optionDescription}>Give staff your ID order</Text>
        </View>
        <Text style={styles.price}>Free</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderBottomWidth: 0.6,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  optionContainerActive: {
    backgroundColor: "#f0f0f0", // Màu xám nhạt
    borderColor: "#007aff",
  },
  optionDetails: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  optionDescription: {
    fontSize: 14,
    color: "#666",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#d32f2f", // Màu xanh cho giá
    alignSelf: "center",
  },
});

export default Delivery;
