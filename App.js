import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/Navigation";

const linking = {
  prefixes: ["blindboxmobile://"], // Scheme cấu hình trong app.json
  config: {
    screens: {
      Home: "home",
      Activity: "activity",
      Notification: "notification",
      Profile: "profile",
      Cart: "cart",
      DetailProduct: "detail-product",
      Checkout: "checkout",
      ProfileUpdated: "profile-updated",
      Login: "login",
      ViewAllProducts: "view-all-products",
      RetailProducts: "retail-products",
      PackageProducts: "package-products",
      Feedback: "feedback",
      Register: "register",
      Wallet: "wallet",
      PaymentSuccess: "payment-success",
      PaymentFailed: "payment-failed",
    },
  },
};

const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
