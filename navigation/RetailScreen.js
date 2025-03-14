import { View, Text, FlatList, StyleSheet } from "react-native";
import Category from "../components/RetailProducts/Category";
import RetailSearch from "../components/RetailProducts/RetailSearch";
import { SafeAreaView } from "react-native-safe-area-context";
import Recommended from "../components/RetailProducts/Recommended";

const RetailScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Thanh Search và Category cố định */}
      <RetailSearch />
      <Category />
      {/* Phần Recommended có thể cuộn */}
      <FlatList
        data={[]}
        ListHeaderComponent={() => <Recommended />} // Hiển thị Recommended ở đầu
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

export default RetailScreen;
