import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import NotificationScreen from "./NotificationScreen";
import ActivityScreen from "./ActivityScreen";
import ProfileScreen from "./ProfileScreen";
import CartScreen from "./CartScreen";
import DetailProductScreen from "./DetailProductScreen";
import CheckoutScreen from "./CheckoutScreen";
import { shadow } from "react-native-paper";
import ProfileUpdatedScreen from "./ProfileUpdatedScreen";
import LoginScreen from "./LoginScreen";
import ViewAllProductsScreen from "./ViewAllProductsScreen";
import RetailScreen from "./RetailScreen";
import PackageScreen from "./PackageScreen";
import FeedbackScreen from "./FeedbackScreen";
import RegisterScreen from "./RegisterScreen";
import WalletScreen from "./WalletScreen";
import AddressScreen from "./AddressScreen";
import ProductFeedbackScreen from "./ProductFeedbackScreen";
import ResetPasswordScreen from "./ResetPasswordScreen";
import PaymentSuccessScreen from "./PaymentSuccessScreen";
import PaymentFailedScreen from "./PaymentFailedScreen";
import PaymentScreen from "./PaymentScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Activity"
        component={ActivityScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DetailProduct"
        component={DetailProductScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ProfileUpdated"
        component={ProfileUpdatedScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ViewAllProducts"
        component={ViewAllProductsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RetailProducts"
        component={RetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PackageProducts"
        component={PackageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Feedback"
        component={FeedbackScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Wallet"
        component={WalletScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Address"
        component={AddressScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductFeedback"
        component={ProductFeedbackScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentSuccess"
        component={PaymentSuccessScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentFailed"
        component={PaymentFailedScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default AppNavigator;
