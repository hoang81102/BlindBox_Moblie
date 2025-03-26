import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Payment = ({ setPaymentType }) => {
  const [selected, setSelected] = useState("");
  const handleSelected = (value) => {
    setSelected(value);
    setPaymentType(value);
    console.log("Loại thanh toán: ", value);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Method</Text>

      <View style={styles.paymentOptionContainer}>
        {/* Bank Option */}
        <TouchableOpacity
          style={[
            styles.optionContainer,
            selected === "bank" && styles.optionContainerActive,
          ]}
          onPress={() => handleSelected("bank")}
        >
          <View style={styles.option}>
            <Ionicons
              name="card-outline"
              size={24}
              style={[styles.icon, selected === "bank" && { color: "#fff" }]}
            />
            <Text
              style={[
                styles.optionTitle,
                selected === "bank" && { color: "#fff" },
              ]}
            >
              Bank
            </Text>
          </View>
          <Text
            style={[
              styles.optionDescription,
              selected === "bank" && { color: "#fff" },
            ]}
          >
            Pay via bank transfer before receiving the order
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
              style={[styles.icon, selected === "wallet" && { color: "#fff" }]}
            />
            <Text
              style={[
                styles.optionTitle,
                selected === "wallet" && { color: "#fff" },
              ]}
            >
              Wallet
            </Text>
          </View>
          <Text
            style={[
              styles.optionDescription,
              selected === "wallet" && { color: "#fff" },
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
    backgroundColor: "#f7f7f7",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  paymentOptionContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  optionContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    paddingVertical: 1,
    paddingHorizontal: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: "45%",
  },
  optionContainerActive: {
    backgroundColor: "#a10000",
    borderWidth: 2,
    borderColor: "#fff",
    shadowColor: "#a10000",
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
    color: "#333",
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  optionDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});

export default Payment;
