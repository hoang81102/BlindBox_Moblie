import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import ActivityHeader from "../components/Activity/ActivityHeader";
import Activity from "../components/Activity/Activity";
const ActivityScreen = () => {
  const [selected, setSelected] = useState("current");

  return (
    <View>
      <Activity />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ActivityScreen;
