import React, { useState } from "react";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

const ForgotPasswordModal = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle sending the password reset request
  const handleSendResetLink = async () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email");
      return;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    setIsLoading(true); // Start loading

    try {
      // Simulate sending password reset link (you would call an API here)
      setTimeout(() => {
        setIsLoading(false);
        Alert.alert("Success", "Password reset link has been sent!");
        closeModal(); // Close the modal after success
      }, 2000); // Simulate network delay
    } catch (error) {
      setIsLoading(false);
      Alert.alert("Error", "Something went wrong, please try again later");
    }
  };

  return (
    <View style={styles.modalContent}>
      <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
        <Text style={styles.closeText}>X</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Enter your email"
        style={styles.textInput}
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TouchableOpacity
        style={styles.sendButton}
        onPress={handleSendResetLink}
        disabled={isLoading} // Disable button while loading
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={styles.sendText}>Send</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "white",
    width: "80%",
    height: 200,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  closeButton: {
    position: "absolute", // Position the button relative to its parent container
    top: 10, // Set the distance from the top
    right: 10, // Set the distance from the right
    borderRadius: 15, // Rounded corners for the button
    padding: 5, // Padding around the "X"
  },
  textInput: {
    backgroundColor: "#f0f0f0",
    borderWidth: 0.6,
    width: 250,
    paddingLeft: 15,
    height: 45,
    borderRadius: 10,
    marginBottom: 15,
  },
  sendButton: {
    backgroundColor: "#d32f2f",
    borderRadius: 30,
    width: "40%",
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 10,
  },
  sendText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});

export default ForgotPasswordModal;
