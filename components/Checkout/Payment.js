import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Payment = () => {
  const [selected, setSelected] = useState("");
  const handleSelected = (value) => {
    setSelected(value);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Method</Text>

      <View style={styles.paymentOptionContainer}>
        {/* Cash Option */}
        <TouchableOpacity
          style={[
            styles.optionContainer,
            selected === "cash" && styles.optionContainerActive,
          ]}
          onPress={() => handleSelected("cash")}
        >
          <View style={styles.option}>
            <Ionicons
              name="cash-outline"
              size={24}
              style={[
                styles.icon,
                selected === "cash" && { color: "#fff" }, // Change icon color when selected
              ]}
            />
            <Text
              style={[
                styles.optionTitle,
                selected === "cash" && { color: "#fff" }, // Change title color when selected
              ]}
            >
              Cash
            </Text>
          </View>
          <Text
            style={[
              styles.optionDescription,
              selected === "cash" && { color: "#fff" }, // Change description color when selected
            ]}
          >
            Pay cash when the shipper arrives at the destination
          </Text>
        </TouchableOpacity>

        {/* Wallet Option */}
        <TouchableOpacity
          style={[
            styles.optionContainer,
            selected === "wallet" && styles.optionContainerActive,
          ]}
          onPress={() => handleSelected("wallet")}
        >
          <View style={styles.option}>
            <Ionicons
              name="wallet-outline"
              size={24}
              style={[
                styles.icon,
                selected === "wallet" && { color: "#fff" }, // Change icon color when selected
              ]}
            />
            <Text
              style={[
                styles.optionTitle,
                selected === "wallet" && { color: "#fff" }, // Change title color when selected
              ]}
            >
              Wallet
            </Text>
          </View>
          <Text
            style={[
              styles.optionDescription,
              selected === "wallet" && { color: "#fff" }, // Change description color when selected
            ]}
          >
            Use wallet of store to pay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#f7f7f7", // Light background for the screen
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333", // Dark text for the title
  },
  paymentOptionContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between", // Align options side by side with spacing
  },
  optionContainer: {
    backgroundColor: "#ffffff", // White background for the options
    borderRadius: 8,
    paddingVertical: 1,
    paddingHorizontal: 15,
    marginBottom: 15,
    shadowColor: "#000", // Light shadow for depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: "45%", // Set width for each option
  },
  optionContainerActive: {
    backgroundColor: "#a10000", // Red background for active selection
    borderWidth: 2,
    borderColor: "#fff", // White border for active state
    shadowColor: "#a10000", // Red shadow for active state
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
    color: "#333", // Icon color will be white for better contrast
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333", // Title color will be white for better contrast
  },
  optionDescription: {
    fontSize: 14,
    color: "#666", // Light color for the description
    marginTop: 5,
  },
});

export default Payment;
