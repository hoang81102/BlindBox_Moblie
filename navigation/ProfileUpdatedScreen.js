import React, { useState } from "react";
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
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import avatar from "../assets/man.jpg";
import { useNavigation } from "@react-navigation/native";

const ProfileUpdatedScreen = () => {
  const [name, setName] = useState("Thi Minh Đạt");
  const [phone, setPhone] = useState("0865659402");
  const [email, setEmail] = useState("thiminhdatdaknong@gmail.com");
  const [gender, setGender] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  // Các lựa chọn giới tính
  const genderOptions = ["Male", "Female", "Other"];

  // Hàm xử lý khi người dùng chọn giới tính
  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
    setIsModalVisible(false); // Đóng modal sau khi chọn
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Profile")}
        >
          <Ionicons
            name="arrow-back-circle-outline"
            size={30}
            color="#2C3E50"
          />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Information */}
      <View style={styles.containerInformation}>
        {/* Avatar */}
        <Image source={avatar} style={styles.avatar} />

        {/* Wallet Section */}
        <View style={styles.walletContainer}>
          <Ionicons name="wallet-outline" size={24} color="#2C3E50" />
          <Text style={styles.walletText}>Số dư ví:</Text>
          <Text style={styles.walletAmount}>125.000 VNĐ</Text>
        </View>

        {/* User Info Section */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Thi Minh Đạt"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="0865659402"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="thiminhdatdaknong@gmail.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          {/* Gender input */}
          <TouchableOpacity
            style={styles.input}
            onPress={() => setIsModalVisible(true)}
          >
            <Text style={styles.genderText}>
              {gender || "Please select your gender"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.saveButton}>
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

      {/* Modal for Gender Selection */}
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
    marginTop: 20,
    height: 70,
    backgroundColor: "white",
    paddingLeft: 15,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    fontSize: 16,
    marginLeft: 10,
    color: "#2C3E50",
  },
  containerInformation: {
    marginTop: 60,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 20,
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
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 16,
    justifyContent: "center",
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
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: "#E74C3C",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
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
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
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
