import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import labubu from "../../assets/labubu.png";
import babythree from "../../assets/babythree.jpg";
import hirono from "../../assets/hirono.jpg";
import dimoo from "../../assets/dimoo.jpg";
import smiski from "../../assets/smiski.jpg";
import PackageSearch from "./PackageSearch";
const PackageCategory = () => {
  const categoryList = [
    { id: 1, title: "Baby Three", icon: babythree },
    { id: 2, title: "Labubu", icon: labubu },
    { id: 3, title: "Hirono", icon: hirono },
    { id: 4, title: "Dimoo", icon: dimoo },
    { id: 5, title: "Smiski", icon: smiski },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Category</Text>
      <FlatList
        data={categoryList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardContent}>
              <Image source={item.icon} style={styles.image} />
              <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        horizontal={true} // Hiển thị các item theo chiều ngang
        showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#f1f1f1",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#d10000",
    marginBottom: 10,
  },
  card: {
    // backgroundColor: "red",
    borderRadius: 15, // Bo tròn các góc card
    marginRight: 5, // Khoảng cách giữa các card
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  cardContent: {
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40, // Bo tròn ảnh
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#555",
  },
});

export default PackageCategory;
