import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const ActivityHeader = ({ onTabChange }) => {
  const [selected, setSelected] = useState("current");

  const handleTabChange = useCallback((value) => {
    setSelected(value);
  }, []);

  useEffect(() => {
    if (onTabChange) {
      onTabChange(selected); // Send the selected state to the parent component
    }
  }, [selected, onTabChange]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activities</Text>
      <View style={styles.statusWrapper}>
        <TouchableOpacity
          style={[
            styles.status,
            selected === "current" ? styles.active : styles.inactive,
          ]}
          onPress={() => handleTabChange("current")}
          accessibilityLabel="Current orders"
          accessibilityRole="button"
        >
          <Text
            style={[styles.text, selected === "current" && styles.textActive]}
          >
            Current Orders
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.status,
            selected === "history" ? styles.active : styles.inactive,
          ]}
          onPress={() => handleTabChange("history")}
          accessibilityLabel="Order history"
          accessibilityRole="button"
        >
          <Text
            style={[styles.text, selected === "history" && styles.textActive]}
          >
            Order History
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 180, // Increased height for a more spacious header
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a10000", // Red background (your main color)
    borderBottomColor: "#c12a28", // Darker red bottom border
    borderBottomWidth: 1,
    shadowColor: "#000", // Shadow effect
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5, // Elevated shadow for Android
  },
  title: {
    fontSize: 28, // Larger font size for emphasis
    fontWeight: "bold",
    color: "#FFFFFF", // White text for title
    marginBottom: 20,
  },
  statusWrapper: {
    flexDirection: "row",
    width: "85%", // Increased width for the tabs
    height: 55, // Increased height for better visibility
    backgroundColor: "#FFFFFF", // White background for the tabs
    borderRadius: 12,
    overflow: "hidden",
    borderColor: "#B0BEC5", // Light gray border for a subtle look
    elevation: 4,
    borderWidth: 1,
  },
  status: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12, // Added padding for easier tapping
  },
  active: {
    backgroundColor: "#d32f2f", // Active state with a bright red background
    borderBottomWidth: 4,
    borderBottomColor: "#FFFFFF", // White border at the bottom when active
  },
  inactive: {
    backgroundColor: "#FFFFFF", // White background when inactive
  },
  text: {
    color: "#2C3E50", // Dark gray text when inactive
    fontSize: 16,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  textActive: {
    color: "#FFFFFF", // White text when tab is active
    fontWeight: "bold",
  },
});

export default ActivityHeader;
