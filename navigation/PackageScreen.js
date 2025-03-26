import { View, Text, FlatList, StyleSheet } from "react-native";
import PackageCategory from "../components/PackageProducts/PackageCategory";
import PackageSearch from "../components/PackageProducts/PackageSearch";
import { SafeAreaView } from "react-native-safe-area-context";
import PackageRecommended from "../components/PackageProducts/PackageRecommended";
import { useEffect, useState } from "react";
import { getPackageProductByCategoryName } from "../services/PackageProductService";

const PackageScreen = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [selectCategory, setSelectCategory] = useState("");
  const [recommendedList, setRecommenedList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPackageProductByCategoryName(selectCategory);
        console.log("result:  ", result); // Kiểm tra kết quả từ API
        setRecommenedList(result || []);
      } catch (error) {
        console.error(error);
      }
    };

    if (selectCategory) {
      fetchData();
    }
  }, [selectCategory]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Thanh Search và Category cố định */}
      <PackageSearch setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <PackageCategory setSelectCategory={setSelectCategory} />
      {/* Phần Recommended có thể cuộn */}
      <FlatList
        data={recommendedList}
        ListHeaderComponent={() =>
          recommendedList.length > 0 ? (
            <PackageRecommended recommendedList={recommendedList} />
          ) : (
            <View style={styles.noDataContainer}>
              <Text>No recommendations available</Text>
            </View>
          )
        }
        keyExtractor={(item, index) =>
          item.blindBoxId ? item.blindBoxId.toString() : index.toString()
        } // Sử dụng `blindBoxId` nếu có, nếu không thì dùng `index`
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noDataContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});

export default PackageScreen;
