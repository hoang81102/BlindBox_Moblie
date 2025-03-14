import { View, Text, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PackageSearch from "../components/PackageProducts/PackageSearch";
import PackageCategory from "../components/PackageProducts/PackageCategory";
import PackageRecommended from "../components/PackageProducts/PackageRecommended";

const PackageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Thanh Search và Category cố định */}
      <PackageSearch />
      <PackageCategory />
      {/* Phần Recommended có thể cuộn */}
      <FlatList
        data={[]}
        ListHeaderComponent={() => <PackageRecommended />} // Hiển thị Recommended ở đầu
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PackageScreen;
