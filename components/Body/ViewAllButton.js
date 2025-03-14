import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Icon cho View All

const ViewAllButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.viewAllButton}>
      <View style={styles.viewAllContent}>
        <Text style={styles.viewAllText}>View All</Text>
        <FontAwesome5 name="arrow-right" size={16} color="#007bff" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewAllButton: {
    borderWidth: 2,
    borderColor: "#ddd",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,

    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  viewAllContent: {
    flexDirection: "column",
    alignItems: "center",
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#007bff",
    marginRight: 5,
  },
  allIcon: {
    backgroundColor: "#007bff",
    borderRadius: 50,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  allIconText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default ViewAllButton;
