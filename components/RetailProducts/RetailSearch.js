import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RetailSearch = ({ setSearchTerm, searchTerm }) => {
  const [value, setValue] = useState(""); // Quản lý trạng thái cho giá trị của TextInput
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <FontAwesome5 name="chevron-left" size={20} color="#a10000" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="What are you searching?"
        placeholderTextColor="#999"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
    </View>
  );
};
export default RetailSearch;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
  },
  backButton: {
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "red",
    flex: 1,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
  },
});
