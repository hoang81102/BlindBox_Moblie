import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "react-native-vector-icons";

const ShippingAddress = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addressContainer}>
        <Ionicons name="map-outline" size={24} color="#d32f2f" />
        <View style={styles.addressContent}>
          <Text style={styles.title}>Shipping Address</Text>
          <Text style={styles.address}>69 Lê Đức Thọ, Gò Vấp, Hồ Chí Minh</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.name}>Thi Minh Đạt</Text>
            <Text style={styles.phone}>0865689102</Text>
          </View>
        </View>
        <Ionicons name="chevron-forward-outline" size={16} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  addressContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF", // White background for address container
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // Shadow effect for Android
  },
  addressContent: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2C3E50", // Dark color for title
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
    color: "#666", // Lighter gray for the address
    marginBottom: 8,
  },
  contactInfo: {
    marginTop: 5,
    flexDirection: "row",
  },
  name: {
    fontSize: 14,
    fontWeight: "600", // Bold for the name
    color: "#333", // Dark color for the name
  },
  phone: {
    fontSize: 14,
    marginLeft: 10,
    color: "#666", // Lighter color for the phone number
  },
});

export default ShippingAddress;
