import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CheckoutHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.component}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-circle-outline" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Checkout</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: "#a10000", // Red background to match main color
  },
  component: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    paddingRight: 15,
  },
  title: {
    flex: 1,
    fontSize: 22,
    fontWeight: "600",
    color: "white", // White color for the title
    textAlign: "center",
    marginRight: 15,
  },
});

export default CheckoutHeader;
