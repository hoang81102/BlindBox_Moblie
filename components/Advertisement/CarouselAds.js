import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

const CarouselAds = ({ imageSource, onPress }) => {
  return (
    <View style={styles.carouselItem}>
      <TouchableOpacity onPress={onPress}>
        <Image source={imageSource} style={styles.image}></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  image: {
    width: 200, // Kích thước hình ảnh
    height: 150, // Kích thước hình ảnh
    borderRadius: 10,
    resizeMode: "cover",
  },
});
export default CarouselAds;
