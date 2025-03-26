import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  Alert,
} from "react-native";
import { useState } from "react";
import { createDeposit } from "../../services/WalletService";
import { Linking } from "react-native"; // Import Linking để mở URL

const DepositModal = ({ onClose, onDepositSuccess }) => {
  const [amount, setAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    // Kiểm tra nếu người dùng chưa nhập số tiền
    if (!amount) {
      setErrorMessage("Please enter a valid amount.");
      return;
    }

    // Kiểm tra nếu số tiền không hợp lệ
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setErrorMessage("Please enter a valid amount greater than 0.");
      return;
    }

    try {
      // Lấy userId từ AsyncStorage
      const storeUserId = await AsyncStorage.getItem("userId");

      if (storeUserId && parsedAmount) {
        // Gọi API tạo deposit
        const response = await createDeposit(storeUserId, parsedAmount);
        console.log("Deposit response:", response); // Kiểm tra phản hồi từ API

        if (response && response.data && response.data.checkoutUrl) {
          const paymentLink = response.data.checkoutUrl;

          // Hiển thị link thanh toán cho người dùng
          Alert.alert("Thanh toán", "Vui lòng thanh toán qua link dưới đây", [
            {
              text: "Mở link",
              onPress: () => {
                Linking.openURL(paymentLink); // Mở link thanh toán
                onDepositSuccess(); // Gọi hàm onDepositSuccess từ cha để cập nhật lại balance
                onClose(); // Đóng modal khi deposit thành công
              },
            },
          ]);
        } else {
          setErrorMessage("There was an error processing the deposit.");
        }
      } else {
        setErrorMessage("User not found.");
      }
    } catch (error) {
      console.error("Error during deposit:", error);
      setErrorMessage("There was an error processing your deposit.");
    }
  };

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Deposit</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Fill money to deposit (VNĐ)"
          value={amount}
          onChangeText={setAmount} // Cập nhật giá trị khi nhập
        />
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onClose} style={styles.buttonCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Nền mờ phía sau modal
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    width: "100%",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#d32f2f",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonCancel: {
    backgroundColor: "#888", // Màu xám cho nút hủy
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    marginRight: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
  },
});

export default DepositModal;
