import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { getPackageProductCategory } from "../../services/PackageProductService";
import { useEffect, useState } from "react";
const PackageCategory = ({ setSelectCategory }) => {
  const [categoryList, setCategoryList] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const data = await getPackageProductCategory();
        setCategoryList(data);
        setLoading(false);
        console.log("category data : ", data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
        setLoading(false);
      }
    };
    fetchCategoryData();
  }, []);
  // Nếu đang loading, hiển thị loader
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Category</Text>
      <FlatList
        data={categoryList}
        keyExtractor={(item) => item.categoryId.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => setSelectCategory(item.categoryName)}
          >
            <View style={styles.cardContent}>
              {/* <Image source={item.icon} style={styles.image} /> */}
              <Image
                source={{ uri: String(item.categoryImage) }} //  là URL hoặc base64
                style={styles.image}
              />
              <Text style={styles.cardTitle}>{item.categoryName}</Text>
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
