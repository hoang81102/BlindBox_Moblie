import React from "react";
import SearchBar from "./SearchBar";
import Notification from "./Notification";

import { View, StyleSheet, Text } from "react-native";
import Background from "./Background";
const Header = () => {
  return (
    <View style={styles.container}>
      <Background />
      <Text style={styles.text}> Xin chào, Thi Minh Đạt </Text>
      <View style={styles.filter}>
        <SearchBar />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    position: "absolute",
    top: 0,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  filter: {
    width: "100%",
    height: "20%",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
});
export default Header;
