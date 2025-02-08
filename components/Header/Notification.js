import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
const Notification = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <FontAwesome5 name="bell" size={18} color="black" style={styles.icon} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    padding: 10,
  },
});
export default Notification;
