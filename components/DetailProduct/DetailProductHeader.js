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
          <Ionicons name="arrow-back-circle-outline" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Product Detail</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: "flex-start",
    backgroundColor: "#a10000",
  },
  component: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    // paddingRight: 15,
  },
  title: {
    flex: 1,
    fontSize: 22,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
    marginRight: 15,
  },
});
export default DetailProductHeader;
