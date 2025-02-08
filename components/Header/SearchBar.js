import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
const SearchBar = ({ value, onChangeText }) => {
  return (
    <View style={styles.searchBar}>
      <FontAwesome name="search" size={20} color="black" />
      <TextInput
        style={styles.input}
        placeholder="Bạn muốn mua gì ?"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
    height: 40,
    backgroundColor: "#e0e0e0",
    borderRadius: 12,
    padding: 4,
    // justifyContent: "center",
    marginRight: 10,
  },
  input: {
    height: "100%",
    fontSize: 16,
    padding: 4,
  },
});
export default SearchBar;
