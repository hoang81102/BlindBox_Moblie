import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import ActivityBody from "./ActivityBody";

const ActivityHeader = ({ onTabChange }) => {
  const [selected, setSelected] = useState("current");

  useEffect(() => {
    if (onTabChange) {
      onTabChange(selected); // Gửi trạng thái selected lên component cha
    }
  }, [selected, onTabChange]);

  const handleSelected = (value) => {
    setSelected(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoạt động</Text>
      <View style={styles.statusWrapper}>
        <TouchableOpacity
          style={[
            styles.status,
            selected === "current" ? styles.active : styles.inactive,
          ]}
          onPress={() => handleSelected("current")}
        >
          <Text
            style={[styles.text, selected === "current" && styles.textActive]}
          >
            Đơn đang đặt
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.status,
            selected === "history" ? styles.active : styles.inactive,
          ]}
          onPress={() => handleSelected("history")}
        >
          <Text
            style={[styles.text, selected === "history" && styles.textActive]}
          >
            Lịch sử
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 160, // Set height for header to prevent overlap
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
    marginTop: 10,
    flex: 0, // Make header non-flexible
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3A2E50",
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  statusWrapper: {
    flexDirection: "row",
    width: "80%",
    height: 50,
    backgroundColor: "#EDEDED",
    borderRadius: 12,
    overflow: "hidden",
    borderColor: "#8CA6DB",
    elevation: 4,
    borderWidth: 1,
  },
  status: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#9B6FC4",
    borderBottomWidth: 3,
    borderBottomColor: "#8CA6DB",
  },
  inactive: {
    backgroundColor: "white",
  },
  text: {
    color: "#3A2E50",
    fontSize: 16,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  textActive: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default ActivityHeader;
