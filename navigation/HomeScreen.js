import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import Advertisement from "../components/Advertisement/Advertisement";
import Footer from "../components/Footer/Footer";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {" "}
      {/* SafeAreaView để tránh che khuất vùng notch trên iPhone */}
      <View style={styles.mainContent}>
        <Header />
        <Body />
        <Advertisement />
      </View>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Cho phép SafeAreaView chiếm toàn bộ không gian màn hình
  },
  mainContent: {
    flex: 1, // Cho phép phần nội dung chính giãn ra, để Footer luôn ở dưới
  },
});

export default HomeScreen;
