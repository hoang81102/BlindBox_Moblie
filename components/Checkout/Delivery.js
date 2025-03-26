import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper"; // Chỉ cần RadioButton

const Delivery = ({ onSelectShipping }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option, price) => {
    setSelectedOption(option);
    onSelectShipping(price); // Gửi giá trị về `Checkout.js`
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
        onPress={() => handleSelectOption("GHN", 50000)}
      >
        <RadioButton
          status={selectedOption === "GHN" ? "checked" : "unchecked"}
          onPress={() => handleSelectOption("GHN", 50000)}
          color="red"
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
        onPress={() => handleSelectOption("Store", 0)}
      >
        <RadioButton
          status={selectedOption === "Store" ? "checked" : "unchecked"}
          onPress={() => handleSelectOption("Store", 0)}
          color="red"
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

export default Delivery;
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
    borderColor: "#d32f2f",
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
