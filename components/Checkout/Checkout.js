import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import ShippingAddress from "./ShippingAddress";
import CheckoutHeader from "./CheckoutHeader";
import OrderSummary from "./OrderSummary";
import Delivery from "./Delivery";
import Payment from "./Payment";
import CheckoutFooter from "./CheckoutFooter";
const Checkout = () => {
  return (
    <ScrollView>
      <CheckoutHeader />
      <ShippingAddress />
      <OrderSummary />
      <Delivery />
      <Payment />
      <CheckoutFooter />
    </ScrollView>
  );
};
export default Checkout;
