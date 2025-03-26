import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
  Alert,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import avatar from "../assets/man.jpg";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getUserInformation,
  updateUserInformation,
} from "../services/UserService";

const ProfileUpdatedScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userId, setUserId] = useState(null);
  const navigation = useNavigation();

  const genderOptions = ["Male", "Female", "Other"];

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
    setIsModalVisible(false);
  };

  useEffect(() => {
    const fetchUserId = async () => {
      const storeUserId = await AsyncStorage.getItem("userId");
      setUserId(storeUserId);
      if (storeUserId) {
        const userData = await getUserInformation(storeUserId);
        if (userData) {
          setFirstName(userData.firstName);
          setLastName(userData.lastName);
          setPhone(userData.phoneNumber);
          setEmail(userData.email);
          setGender(userData.gender || ""); // Đảm bảo giá trị mặc định
        }
      }
    };
    fetchUserId();
  }, []);

  const handleSave = async () => {
    try {
      if (userId) {
        await updateUserInformation(
          userId,
          firstName,
          lastName,
          email,
          phone,
          gender
        );
        Alert.alert("Profile updated successfully");
        navigation.goBack();
      } else {
        Alert.alert("User ID not found");
      }
    } catch (error) {
      Alert.alert("Error updating profile");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome5
            name="chevron-left"
            style={styles.backButton}
            size={20}
            color="white"
          />
        </TouchableOpacity>
        <Text style={styles.profileText}>Profile</Text>
      </View>

      <View style={styles.containerInformation}>
        <Image source={avatar} style={styles.avatar} />

        <View style={styles.walletContainer}>
          <Ionicons name="wallet-outline" size={24} color="#2C3E50" />
          <Text style={styles.walletText}>Số dư ví:</Text>
          <Text style={styles.walletAmount}>125.000 VNĐ</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <TouchableOpacity
            style={styles.input}
            onPress={() => setIsModalVisible(true)}
          >
            <Text style={styles.genderText}>
              {gender || "Please select your gender"}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => navigation.navigate("Profile")}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Select Gender</Text>
              <FlatList
                data={genderOptions}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.modalOption}
                    onPress={() => handleGenderSelect(item)}
                  >
                    <Text style={styles.modalOptionText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
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
    paddingHorizontal: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileText: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,

    color: "#fff",
    fontWeight: "bold",
  },
  containerInformation: {
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 15,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    alignSelf: "center",
    marginBottom: 20,
    borderWidth: 4,
    borderColor: "#a10000", // Tạo viền cho avatar
  },
  walletContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  walletText: {
    fontSize: 16,
    color: "#2C3E50",
    marginLeft: 10,
  },
  walletAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0d0045",
    marginLeft: 5,
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    height: 45,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
    backgroundColor: "#f9f9f9", // Tạo nền nhẹ cho input
  },
  genderText: {
    fontSize: 16,
    color: "#7f8c8d",
  },
  buttonsContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  saveButton: {
    backgroundColor: "#0d0045",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cancelButton: {
    backgroundColor: "#E74C3C",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalOption: {
    paddingVertical: 10,
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  modalOptionText: {
    fontSize: 16,
    color: "#2C3E50",
  },
});

export default ProfileUpdatedScreen;
