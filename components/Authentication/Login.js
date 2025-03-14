import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  Alert,
  ActivityIndicator, // Dùng để hiển thị loading spinner
} from "react-native";
import { login } from "../../services/AuthService"; // Giả sử bạn đã có AuthService
import blindbox from "../../assets/doremon.png"; // Hình ảnh logo
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Trạng thái loading khi đăng nhập

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
  };

  const handleCreateAccount = () => {
    console.log("Create account clicked");
  };

  // Cập nhật email khi người dùng nhập
  const handleEmail = (value) => {
    setEmail(value);
  };

  // Cập nhật mật khẩu khi người dùng nhập
  const handlePassword = (value) => {
    setPassWord(value);
  };

  // Xử lý đăng nhập
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
              value={email} // Liên kết với state email
              onChangeText={handleEmail} // Cập nhật email khi người dùng nhập
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry
              value={password} // Liên kết với state password
              onChangeText={handlePassword} // Cập nhật password khi người dùng nhập
            />
          </View>
        </View>

        {/* Hiển thị spinner loading nếu đang đăng nhập */}
        {isLoading ? (
          <ActivityIndicator size="large" color="#007aff" />
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        )}

        {/* Forgot password link */}
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.linkText}>Forgot password?</Text>
        </TouchableOpacity>

        {/* Create account link */}
        <TouchableOpacity onPress={handleCreateAccount}>
          <Text style={styles.linkText}>Create account</Text>
        </TouchableOpacity>
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
    backgroundColor: "#007aff",
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
    backgroundColor: "#34b7f1",
    borderRadius: 30,
    width: "80%",
    paddingVertical: 15,
    alignItems: "center",
    marginVertical: 15,
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
});

export default Login;
