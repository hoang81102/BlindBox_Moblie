import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

const CarouselAds = ({ imageSource, onPress }) => {
  return (
    <View style={styles.carouselItem}>
      <TouchableOpacity onPress={onPress} style={styles.touchable}>
        <Image source={imageSource} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    borderRadius: 14,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 }, // Bóng nhẹ cho hiệu ứng 3D
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  touchable: {
    borderRadius: 14,
    overflow: "hidden",
  },
  image: {
    width: 320,
    height: 240,
    borderRadius: 18,
    resizeMode: "cover",
  },
});

export default CarouselAds;
