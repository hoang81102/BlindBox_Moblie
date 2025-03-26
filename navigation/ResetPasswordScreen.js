import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Image,
  Alert,
} from "react-native";

import blindbox from "../assets/dimoo.jpg";

const ResetPasswordScreen = () => {
  const [email, setEmail] = useState(""); // New password state
  const [password, setPassword] = useState(""); // New password state
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirm password state
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    setIsLoading(true);

    // Simulate password reset process (replace with your actual API request)
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert("Success", "Password has been reset successfully");
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={blindbox} style={styles.image} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.resetPasswordText}>Reset Password</Text>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>New Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your new password"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm your new password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
            />
          </View>
        </View>

        {isLoading ? (
          <ActivityIndicator size="large" color="#d32f2f" />
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

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
  resetPasswordText: {
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
});

export default ResetPasswordScreen;
