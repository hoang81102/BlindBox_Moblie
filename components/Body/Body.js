import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ProductList from "./ProductList";
// import labubu from "../../assets/labubu.png";
import labubu from "../../assets/labubu1.jpg";
import dot from "../../assets/3dot.png";
const Body = () => {
  const products = [
    { id: 1, imageSource: labubu, title: "Labubu 1" },
    { id: 2, imageSource: labubu, title: "Labubu 2" },
    { id: 3, imageSource: labubu, title: "Labubu 3" },
    { id: 4, imageSource: labubu, title: "Labubu 4" },
    { id: 5, imageSource: labubu, title: "Labubu 5" },
    { id: 6, imageSource: labubu, title: "Labubu 6" },
    { id: 7, imageSource: labubu, title: "Labubu 7" },
    { id: 8, imageSource: labubu, title: "Labubu 8" },
    // { id: 8, imageSource: dot, title: "View All" },
  ];

  return (
    <View style={styles.bodyContainer}>
      {/* Dùng FlatList để hiển thị 2 hàng, mỗi hàng 4 item */}
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductList title={item.title} imageSource={item.imageSource} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={4} // Chia thành 4 cột (mỗi hàng có 4 item)
        numRows={2}
        contentContainerStyle={styles.scrollContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    marginTop: 310, // Khoảng cách từ trên cùng
    marginLeft: 10,
  },
  scrollContainer: {
    paddingVertical: 10, // Khoảng cách giữa các hàng
  },
});

export default Body;
