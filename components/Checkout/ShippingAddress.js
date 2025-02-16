import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "react-native-vector-icons";
const ShippingAddress = () => {
  return (
    <View>
      <TouchableOpacity>
        <Ionicons name="map-outline" size={20} />
        <View>
          <Text> Shipping Address </Text>
          <Text> 69 Lê Đức Thọ , Gò Vấp, Hồ Chí Minh</Text>
          <View>
            <Text>Thi Minh Đạt</Text>
            <Text>0865689102</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default ShippingAddress;
