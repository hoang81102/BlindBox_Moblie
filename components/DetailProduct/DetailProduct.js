import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import DetailProductHeader from "./DetailProductHeader";
import DetailProductBody from "./DetailProductBody";
import DetailProductFooter from "./DetailProductFooter";

const DetailProduct = () => {
  return (
    <View>
      <DetailProductHeader />

      <DetailProductBody />

      <DetailProductFooter />
    </View>
  );
};

export default DetailProduct;
