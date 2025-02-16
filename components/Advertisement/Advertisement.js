import React from "react";
import carousel1 from "../../assets/carousel1.jpg";
import carousel2 from "../../assets/carousel2.jpg";
import carousel3 from "../../assets/carousel3.jpg";
import CarouselAds from "./CarouselAds";
import { View, FlatList, StyleSheet, Alert, Text } from "react-native";
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
        <Text style={styles.title}>Bộ sưu tập </Text>
        <FontAwesome5 name="eye" size={14} color="black" />
        {/* <FontAwesome5 name="eye" size={14} color="black" /> */}
      </View>
      <FlatList
        data={CarouselList}
        renderItem={({ item }) => (
          <CarouselAds
            key={item.id}
            imageSource={item.imageSource}
            onPress={() => handlePress(item.id)} // Truyền id vào hàm onPress
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal // Làm cho carousel vuốt ngang
        showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
        pagingEnabled // Chế độ paging (mỗi lần vuốt qua 1 item)
        snapToAlignment="center" // Căn giữa item khi vuốt
        snapToInterval={310} // Khoảng cách giữa các item (tương đương với kích thước ảnh)
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 550,
    marginBottom: 20,
    height: 220, // Chiều cao carousel
  },
  // Phần xử lý CarouselAds
  intro: {
    marginTop: 25,
    flexDirection: "row",

    alignItems: "center",
  },
  title: {
    fontSize: 19,
    fontWeight: "500",
    marginLeft: 10,
  },
});

export default Advertisement;
