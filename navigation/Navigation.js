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

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // ẩn tiêu đề
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
          component={DetailProductScreen} // lỗi ở đây
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
