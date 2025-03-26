import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { getAllAddress } from "../../services/AddressService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AddressScreen from "../../navigation/AddressScreen";

const ShippingAddress = ({ setShippingAddress }) => {
  const route = useRoute();
  const [currentAddress, setCurrentAddress] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  // Lấy địa chỉ mặc định nếu chưa có địa chỉ được chọn
  useEffect(() => {
    const fetchDefaultAddress = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        if (userId) {
          const data = await getAllAddress(userId, 1, null);
          const defaultAddress = data.items.find((addr) => addr.isDefault);
          if (defaultAddress) {
            setCurrentAddress(defaultAddress);
            setShippingAddress(defaultAddress); // Lưu địa chỉ mặc định vào state của parent
          }
        }
      } catch (error) {
        console.error("Lỗi khi lấy địa chỉ mặc định:", error);
      }
    };

    fetchDefaultAddress();
  }, []); // Chạy một lần khi component load

  // Cập nhật khi người dùng chọn địa chỉ mới từ AddressScreen
  useEffect(() => {
    if (route.params?.selectedAddress) {
      setCurrentAddress(route.params.selectedAddress);
      setShippingAddress(route.params.selectedAddress); // Cập nhật lại địa chỉ đã chọn
      setOpenModal(false); // đóng modal sau khi chọn địa chỉ
    }
  }, [route.params?.selectedAddress]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addressContainer}
        onPress={() => setOpenModal(true)}
      >
        <Ionicons name="map-outline" size={24} color="#d32f2f" />
        <View style={styles.addressContent}>
          <Text style={styles.title}>Shipping Address</Text>
          {currentAddress ? (
            <>
              <Text style={styles.address}>{currentAddress.addressLine1}</Text>
              <View style={styles.contactInfo}>
                <Text style={styles.name}>{currentAddress.nameReceiver}</Text>
                <Text style={styles.phone}>{currentAddress.phoneNumber}</Text>
              </View>
            </>
          ) : (
            <Text style={styles.address}>No address selected</Text>
          )}
        </View>
        <Ionicons name="chevron-forward-outline" size={16} />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={false}
        visible={openModal}
        onRequestClose={() => setOpenModal(false)}
      >
        <AddressScreen
          onSelectAddress={(address) => {
            setCurrentAddress(address);
            setOpenModal(false);
            setShippingAddress(address); // Cập nhật địa chỉ khi chọn từ AddressScreen
          }}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  addressContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  addressContent: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  contactInfo: {
    marginTop: 5,
    flexDirection: "row",
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  phone: {
    fontSize: 14,
    marginLeft: 10,
    color: "#666",
  },
});

export default ShippingAddress;
