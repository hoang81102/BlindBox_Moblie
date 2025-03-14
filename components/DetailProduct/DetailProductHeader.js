import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const DetailProductHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.component}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-circle-outline" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Order Detail</Text>
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
    justifyContent: "flex-start", // Make sure it doesn't push to the end
    backgroundColor: "#f5f5f5", // Light background color to make header visible
    height: 100, // Ensure there's enough space for the header content
  },
  component: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "pink",
  },
  iconContainer: {
    // paddingRight: 15,
  },
  title: {
    flex: 1,
    fontSize: 22,
    fontWeight: "600",
    color: "black",
    textAlign: "center",
    marginRight: 15,
  },
});
export default DetailProductHeader;
