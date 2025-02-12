import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import CurrentOrders from "../Order/CurrentOrders";
import OrderHistory from "../Order/OrderHistory";

const ActivityBody = ({ value }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Render các component dựa trên giá trị của value */}
      {value === "history" ? (
        <OrderHistory />
      ) : value === "current" ? (
        <CurrentOrders />
      ) : (
        <Text>Nothing</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 10,
    backgroundColor: "#F5F5F5",
    paddingBottom: 650,
  },
});

export default ActivityBody;
