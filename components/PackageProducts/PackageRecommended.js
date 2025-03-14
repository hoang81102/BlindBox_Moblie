import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import labubu from "../../assets/labubu.jpg";
import babythree from "../../assets/babythree.jpg";
import hirono from "../../assets/hirono.jpg";
import smiski from "../../assets/smiski.jpg";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PackageRecommended = () => {
  const productList = [
    {
      id: 1,
      image: labubu,
      rating: 4.5,
      name: "Labubu - Limited Edition",
      price: "125000",
    },
    {
      id: 2,
      image: babythree,
      rating: 4.5,
      name: "Babythree - Limited Edition",
      price: "125000",
    },
    {
      id: 3,
      image: hirono,
      rating: 4.5,
      name: "Hirono - Limited Edition",
      price: "125000",
    },
    {
      id: 4,
      image: smiski,
      rating: 4.5,
      name: "Smiski  - Limited Edition",
      price: "125000",
    },
  ];

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("DetailProduct", { productId: item.id })
      }
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.infoContainer}>
        {/* Rating */}
        <View style={styles.rating}>
          <Text style={styles.ratingText}>{item.rating} </Text>
          <FontAwesome5 name="star" size={14} color="#f1c40f" />
        </View>
        {/* Product Name */}
        <Text style={styles.productName} numberOfLines={2}>
          {item.name}
        </Text>
        {/* Product Price */}
        <Text style={styles.productPrice}>
          {item.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VNĐ/Package
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recommended</Text>
      <FlatList
        data={productList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 15,
    backgroundColor: "#d10000",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f3f3f3", // Color for header
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginBottom: 20,
    flexDirection: "row", // Make sure image and info are aligned horizontally
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: "40%", // Image takes 40% of the card width
    height: 120,
    borderRadius: 10,
  },
  infoContainer: {
    marginLeft: 15, // Space between image and product info
    flex: 1,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: "500",
    marginRight: 5,
    color: "#333",
  },
  productName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "500",
    color: "#e74c3c", // Red color for price to make it stand out
  },
});

export default PackageRecommended;
