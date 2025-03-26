import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import Advertisement from "../components/Advertisement/Advertisement";
import Footer from "../components/Footer/Footer";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
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
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
});

export default HomeScreen;
