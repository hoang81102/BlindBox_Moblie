import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { changePaymentStatus } from "../services/PaymentService";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const PaymentSuccessScreen = ({ route }) => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [orderCode, setOrderCode] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchOrderId = async () => {
      const storedOrderId = await AsyncStorage.getItem("orderId");
      setOrderId(storedOrderId);
      const storeOrderCode = await AsyncStorage.getItem("orderCode");
      setOrderCode(storeOrderCode);
      if (storeOrderCode && storedOrderId) {
        const data = await changePaymentStatus(storedOrderCode, storedOrderId);
        console.log("change payment status: ", data);
      }
    };
    fetchOrderId();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment Success</Text>
      <Image
        source={require("../assets/paymentsuccess.png")}
        style={styles.successImage}
      />
      <Text style={styles.orderCode}>Order Code: {orderCode}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Back Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#d32f2f",
    marginBottom: 20,
  },
  successImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  orderCode: {
    fontSize: 18,
    color: "#a10000",
    fontWeight: "bold",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#d32f2f", // Màu nền đỏ
    paddingVertical: 12, // Padding trên dưới
    paddingHorizontal: 30, // Padding trái phải
    borderRadius: 25, // Bo góc
    shadowColor: "#000", // Màu bóng
    shadowOffset: { width: 0, height: 2 }, // Vị trí bóng
    shadowOpacity: 0.2, // Độ mờ của bóng
    shadowRadius: 5, // Lường mờ của bóng
    elevation: 5, // Tạo bóng cho Android
  },
  buttonText: {
    fontSize: 18,
    color: "#fff", // Màu chữ trắng
    fontWeight: "bold",
    textAlign: "center", // Căn giữa chữ
  },
});

export default PaymentSuccessScreen;
