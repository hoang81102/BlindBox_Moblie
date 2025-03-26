import React, { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from "react-native";
import PendingOrder from "./PendingOrder"; // Import PendingOrder.js
import ConfirmedOrder from "./ConfirmedOrder"; // Import ConfirmedOrder.js
import DeliveringOrder from "./DeliveringOrder";
const CurrentOrders = () => {
  const [currentView, setCurrentView] = useState("pending");

  return (
    <ScrollView>
      <View style={styles.statusContainer}>
        <TouchableOpacity
          style={styles.statusButton}
          onPress={() => setCurrentView("pending")}
        >
          <Text style={styles.statusText}>Pending</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.statusButton}
          onPress={() => setCurrentView("confirmed")}
        >
          <Text style={styles.statusText}>Confirmed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.statusButton}
          onPress={() => setCurrentView("delivering")}
        >
          <Text style={styles.statusText}>Delivering</Text>
        </TouchableOpacity>
      </View>
      {currentView === "pending" && <PendingOrder />}{" "}
      {/* Hiển thị PendingOrder khi bấm vào Pending */}
      {currentView === "confirmed" && <ConfirmedOrder />}{" "}
      {/* Hiển thị ConfirmedOrder khi bấm vào Confirmed */}
      {currentView === "delivering" && <DeliveringOrder />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  statusContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    padding: 10,
  },
  statusText: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
  statusButton: {
    backgroundColor: "#d32f2f",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    textAlign: "center",
    color: "#FFFFFF",
    borderColor: "#ccc",
    borderWidth: 1,
  },
});

export default CurrentOrders;
