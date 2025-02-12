import React from "react";
import { View, Image, StyleSheet } from "react-native";
import background from "../../assets/background.png";
const Background = () => {
  return (
    <View style={styles.container}>
      <Image source={background} style={styles.image} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
export default Background;
