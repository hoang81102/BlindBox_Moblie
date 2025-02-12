import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import NotificationScreen from "./NotificationScreen";
import ActivityScreen from "./ActivityScreen";
import ProfileScreen from "./ProfileScreen";
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
