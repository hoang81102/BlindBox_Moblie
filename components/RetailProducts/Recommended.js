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
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Recommended = ({ recommendedList }) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("DetailProduct", {
          blindBoxId: item.blindBoxId,
          blindBoxName: item.blindBoxName,
          blindBoxType: "BlindBox",
          blindBoxPrice: item.price,
          blindBoxDescription: item.description,
          blindBoxImageUrl: String(item.imageUrl || labubu),
          blindBoxStock: item.stock,
        })
      }
    >
      {/* Kiểm tra nếu item.category tồn tại trước khi truy cập categoryImage */}
      <Image
        source={{ uri: String(item.imageUrl) || labubu }}
        style={styles.image}
      />

      <View style={styles.infoContainer}>
        {/* Kiểm tra nếu item.rating tồn tại */}
        <View style={styles.rating}>
          <Text style={styles.ratingText}>{item.rating || "No rating"}</Text>
          <FontAwesome5 name="star" size={14} color="#f1c40f" />
        </View>
        {/* Kiểm tra nếu item.blindBoxName tồn tại */}
        <Text style={styles.productName} numberOfLines={2}>
          {item.blindBoxName || "No product name"}
        </Text>
        {/* Kiểm tra nếu item.price tồn tại */}
        <Text style={styles.productPrice}>
          {item.price}
          VNĐ/Box
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recommended</Text>
      <FlatList
        data={recommendedList}
        keyExtractor={(item) => item.blindBoxId?.toString() || item.blindBoxId} // Sử dụng blindBoxId làm key
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Recommended;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 15,
    backgroundColor: "#d10000",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f3f3f3",
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
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: "40%",
    height: 120,
    borderRadius: 10,
  },
  infoContainer: {
    marginLeft: 15,
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
    color: "#e74c3c",
  },
});
