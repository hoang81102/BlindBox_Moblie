import React from "react";
import carousel1 from "../../assets/carousel1.jpg";
import carousel2 from "../../assets/carousel2.jpg";
import carousel3 from "../../assets/carousel3.jpg";
import CarouselAds from "./CarouselAds";
import {
  View,
  FlatList,
  StyleSheet,
  Alert,
  Text,
  ImageBackground,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const CarouselList = [
  { id: 1, imageSource: carousel1 },
  { id: 2, imageSource: carousel2 },
  { id: 3, imageSource: carousel3 },
];

const Advertisement = () => {
  // Phần Xử lý Carousel Ads
  const handlePress = (imageId) => {
    Alert.alert("Thông báo", `Bạn đã nhấn vào ảnh có ID: ${imageId}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.intro}>
        <Text style={styles.title}>Bộ sưu tập</Text>
        {/* <FontAwesome5 name="eye" size={16} color="#4f87d3" /> */}
      </View>
      <FlatList
        data={CarouselList}
        renderItem={({ item }) => (
          <CarouselAds
            key={item.id}
            imageSource={item.imageSource}
            onPress={() => handlePress(item.id)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={310}
        contentContainerStyle={styles.carouselContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 450,
    marginTop: 10,
    height: 300,
    paddingHorizontal: 10,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    // backgroundColor: "#a10000",
  },
  intro: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginTop: 10,
    fontSize: 21,
    fontWeight: "600",
    color: "#a10000",
  },
  carouselContainer: {
    paddingBottom: 10,
  },
  carouselItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    position: "relative",
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.3)", // Màu overlay nhẹ (trắng với độ trong suốt)
  },
});

export default Advertisement;
