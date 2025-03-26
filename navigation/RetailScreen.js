import { View, Text, FlatList, StyleSheet } from "react-native";
import Category from "../components/RetailProducts/Category";
import RetailSearch from "../components/RetailProducts/RetailSearch";
import { SafeAreaView } from "react-native-safe-area-context";
import Recommended from "../components/RetailProducts/Recommended";
import { useEffect, useState } from "react";
import { getRetailProductByCategoryName } from "../services/RetailProductService";

const RetailScreen = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [selectCategory, setSelectCategory] = useState("");
  const [recommendedList, setRecommenedList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getRetailProductByCategoryName(selectCategory);
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
      <RetailSearch setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <Category setSelectCategory={setSelectCategory} />
      {/* Phần Recommended có thể cuộn */}
      <FlatList
        data={recommendedList}
        ListHeaderComponent={() =>
          recommendedList.length > 0 ? (
            <Recommended recommendedList={recommendedList} />
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

export default RetailScreen;
