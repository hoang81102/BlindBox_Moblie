import React, { useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ServiceList from "./ServiceList";
import { useNavigation } from "@react-navigation/native";
import SpinWheelModal from "./SpinWheelModal";

const services = [
  { id: 1, icon: "shopping-cart", title: "Retail" },
  { id: 2, icon: "box", title: "Package" },
  { id: 3, icon: "spinner", title: "Lucky Wheel" },
];

const Body = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handlePress = (title) => {
    switch (title) {
      case "Retail":
        navigation.navigate("RetailProducts");
        break;
      case "Package":
        navigation.navigate("PackageProducts");
        break;
      case "Lucky Wheel":
        setIsModalVisible(true);
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.bodyContainer}>
      <FlatList
        data={services}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.title)}>
            <ServiceList title={item.title} icon={item.icon} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={4}
        contentContainerStyle={styles.scrollContainer}
      />
      <SpinWheelModal onClose={handleCloseModal} isVisible={isModalVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    marginTop: 350,
  },
  scrollContainer: {
    paddingTop: 10,
  },
});

export default Body;
