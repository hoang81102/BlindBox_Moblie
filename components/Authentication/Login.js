import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  Alert,
  ActivityIndicator,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { login, saveUser } from "../../services/AuthService"; // Giả sử bạn đã có AuthService
import blindbox from "../../assets/dimoo.jpg";
import FbLogo from "../../assets/facebook.png";
import GgLogo from "../../assets/google.png";
import LiLogo from "../../assets/linkedin.png";
import { useGoogleLogin } from "../../services/GoogleAuthService"; // Import hook useGoogleLogin
import ForgotPasswordModal from "./ForgotPasswordModal";
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeFb, setActiveFb] = useState(false);
  const [activeGg, setActiveGg] = useState(false);
  const [activeLi, setActiveLi] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  // Google login hook
  const { request, promptAsync } = useGoogleLogin(); // Sử dụng hook Google login

  // Xử lý đăng nhập bình thường với email và password
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Email and Password are required");
      return;
    }

    setIsLoading(true); // Bắt đầu loading

    try {
      const user = await login(email, password); // Gọi API đăng nhập
      setIsLoading(false); // Dừng loading
      navigation.navigate("Home"); // Điều hướng đến màn hình Home sau khi đăng nhập thành công
    } catch (error) {
      setIsLoading(false); // Dừng loading
      Alert.alert("Login Failed", "Please check your information again");
    }
  };

  // Xử lý phần quên password
  const handleForgotPassword = () => {
    console.log("Click forgot password");
    setForgotPassword(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={blindbox} style={styles.image} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.loginText}>Login</Text>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => setEmail(text)} // Cập nhật email
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassWord(text)} // Cập nhật password
            />
          </View>
        </View>

        {/* Hiển thị spinner loading nếu đang đăng nhập */}
        {isLoading ? (
          <ActivityIndicator size="large" color="#d32f2f" />
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        )}

        {/* Phần Login with */}
        <View style={styles.socialLoginContainer}>
          <TouchableOpacity
            style={[styles.socialButton, activeFb && styles.activeButton]}
            onPressIn={() => setActiveFb(true)}
            onPressOut={() => setActiveFb(false)}
          >
            <Image source={FbLogo} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.socialButton, activeGg && styles.activeButton]}
            onPressIn={() => setActiveGg(true)}
            onPressOut={() => setActiveGg(false)}
            onPress={async () => {
              setIsLoading(true); // Bắt đầu loading khi đăng nhập Google
              await promptAsync(); // Thực hiện đăng nhập Google
              setIsLoading(false); // Dừng loading sau khi đăng nhập
            }} // Đăng nhập Google
          >
            <Image source={GgLogo} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.socialButton, activeLi && styles.activeButton]}
            onPressIn={() => setActiveLi(true)}
            onPressOut={() => setActiveLi(false)}
          >
            <Image source={LiLogo} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>

        {/* Forgot password link và Create account link */}
        <View style={styles.linkContainer}>
          <TouchableOpacity onPress={() => handleForgotPassword()}>
            <Text style={styles.linkText}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.linkText}>Create account</Text>
          </TouchableOpacity>
        </View>

        {/* Forgot Password Modal */}
        <Modal
          visible={forgotPassword}
          animationType="slide"
          transparent
          onRequestClose={() => setForgotPassword(false)} // Close modal on request
        >
          <View style={styles.modalOverlay}>
            <ForgotPasswordModal closeModal={() => setForgotPassword(false)} />
          </View>
        </Modal>
      </View>
    </View>
  );
};

// Các kiểu cho giao diện
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
    backgroundColor: "white",
    height: 300,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
  },
  bottomContainer: {
    backgroundColor: "#a10000",
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    alignItems: "center",
  },
  loginText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  form: {
    width: "80%",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    color: "white",
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#d32f2f",
    borderRadius: 30,
    width: "80%",
    paddingVertical: 15,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  linkText: {
    fontSize: 14,
    color: "white",
    textDecorationLine: "underline",
    marginTop: 5,
  },
  // Phần Login with
  socialLoginContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },
  activeButton: {
    opacity: 0.7, // Tạo hiệu ứng mờ khi nhấn
  },
  socialButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "white",

    elevation: 3, // Hiệu ứng bóng mờ khi nhấn
    shadowColor: "#000", // Tạo bóng
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  socialIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  linkContainer: {
    alignItems: "center", // Căn giữa các liên kết
  },
  linkText: {
    fontSize: 14,
    color: "white",
    textDecorationLine: "underline",
    marginTop: 20,
  },
  // Phần forgot password
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default Login;
