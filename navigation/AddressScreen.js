import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Button,
  Switch,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { getAllAddress, createAddress } from "../services/AddressService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native"; // Thêm useNavigation

const AddressScreen = ({ onSelectAddress }) => {
  const navigation = useNavigation(); // Khai báo navigation
  const [addressList, setAddressList] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [newAddress, setNewAddress] = useState("");
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newAddressLine2, setNewAddressLine2] = useState("");
  const [newState, setNewState] = useState("");
  const [newPostalCode, setNewPostalCode] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [isDefault, setIsDefault] = useState(false); // Default value for new address

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        if (userId) {
          const data = await getAllAddress(userId, 1, null);
          setAddressList(data.items || []);
          const defaultAddress = data.items.find((addr) => addr.isDefault);
          if (defaultAddress) {
            setSelectedAddress(defaultAddress);
          }
        }
      } catch (error) {
        console.error("Lỗi khi lấy danh sách địa chỉ:", error);
      }
    };

    fetchAddresses();
  }, []);

  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
    if (onSelectAddress) {
      onSelectAddress(address);
    }
  };

  const handleAddAddress = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");

      if (userId) {
        const newAddressData = await createAddress(
          userId,
          newAddress, // addressLine1
          newAddressLine2, // addressLine2
          newPhone, // phoneNumber
          newName, // nameReceiver
          newState, // state
          newPostalCode, // postalCode
          newCountry, // country
          isDefault
        );
        setAddressList((prev) => [...prev, newAddressData]);
        setModalVisible(false);
      }
    } catch (error) {
      console.error("Lỗi khi thêm địa chỉ:", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome5 name="chevron-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Address</Text>
      </View>

      {/* Danh sách địa chỉ */}
      <View style={styles.addressContainer}>
        {addressList.map((item) => (
          <TouchableOpacity
            key={item.addressId}
            style={[
              styles.addressItem,
              selectedAddress &&
                selectedAddress.addressId === item.addressId &&
                styles.selectedAddress, // Kiểm tra nếu selectedAddress có giá trị
            ]}
            onPress={() => handleSelectAddress(item)}
          >
            <View style={styles.radioButtonContainer}>
              <FontAwesome5
                name={
                  selectedAddress &&
                  selectedAddress.addressId === item.addressId
                    ? "dot-circle"
                    : "circle"
                }
                size={20}
                color={
                  selectedAddress &&
                  selectedAddress.addressId === item.addressId
                    ? "#d32f2f"
                    : "#BDC3C7"
                }
              />
            </View>
            <View style={styles.addressDetails}>
              <Text style={styles.addressText}>{item.addressLine1}</Text>
              <Text style={styles.contactName}>{item.nameReceiver}</Text>
              <Text style={styles.contactPhone}>{item.phoneNumber}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Thêm địa chỉ (Modal) */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <FontAwesome5 name="plus-circle" size={20} color="white" />
        <Text style={styles.addButtonText}>Add Address</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalHeader}>Add New Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Address"
              value={newAddress}
              onChangeText={setNewAddress}
            />
            <TextInput
              style={styles.input}
              placeholder="Address Line 2 (Optional)"
              value={newAddressLine2}
              onChangeText={setNewAddressLine2}
            />
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={newName}
              onChangeText={setNewName}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone"
              keyboardType="phone-pad"
              value={newPhone}
              onChangeText={setNewPhone}
            />
            <TextInput
              style={styles.input}
              placeholder="State (Optional)"
              value={newState}
              onChangeText={setNewState}
            />
            <TextInput
              style={styles.input}
              placeholder="Postal Code (Optional)"
              value={newPostalCode}
              onChangeText={setNewPostalCode}
            />
            <TextInput
              style={styles.input}
              placeholder="Country (Optional)"
              value={newCountry}
              onChangeText={setNewCountry}
            />

            <View style={styles.modalButtons}>
              <Button
                title="Cancel"
                color="#d32f2f"
                onPress={() => setModalVisible(false)}
              />
              <Button title="Add" color="#d32f2f" onPress={handleAddAddress} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#a10000",
    paddingVertical: 40,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
  addressContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  addressItem: {
    backgroundColor: "white",
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
    borderLeftWidth: 4,
    borderLeftColor: "#BDC3C7",
  },
  selectedAddress: {
    borderLeftColor: "#d32f2f",
    borderLeftWidth: 6,
  },
  radioButtonContainer: {
    marginRight: 10,
  },
  addressDetails: {
    flex: 1,
    justifyContent: "center",
  },
  addressText: {
    fontSize: 18,
    color: "#2C3E50",
    fontWeight: "600",
    marginBottom: 5,
    paddingRight: 10,
  },
  contactContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  contactName: {
    fontSize: 16,
    color: "#7f8c8d",
    fontWeight: "bold",
  },
  contactPhone: {
    fontSize: 16,
    color: "#7f8c8d",
    marginLeft: 15,
    fontStyle: "italic",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#a10000",
    paddingVertical: 15,
    marginHorizontal: 60,
    borderRadius: 30,
    marginTop: 20,
    justifyContent: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
  },

  // Modal Styles
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Background with transparency
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#BDC3C7",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
});

export default AddressScreen;
