import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import blindbox from "../../assets/dimoo.jpg";
import { useNavigation } from "@react-navigation/native";
import { register } from "../../services/AuthService";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // New state for phone number
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  // Function to validate email
  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/; // Simple email regex check
    return regex.test(email);
  };

  // Function to validate password
  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    return regex.test(password);
  };

  // Function to validate phone number
  const validatePhoneNumber = (phone) => {
    const regex = /^[0-9]{10}$/; // Simple regex for 10 digit phone number
    return regex.test(phone);
  };

  const handleRegister = async () => {
    if (!firstName || !lastName || !email || !password || !phoneNumber) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert(
        "Error",
        "Password must have at least 6 characters, 1 uppercase letter, 1 number, and 1 special character."
      );
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      Alert.alert("Error", "Please enter a valid phone number (10 digits).");
      return;
    }

    setIsLoading(true);
    try {
      const result = await register(
        firstName,
        lastName,
        email,
        password,
        phoneNumber
      ); // Add phone number to registration
      setIsLoading(false);
      Alert.alert("Check email to confirm!");
      navigation.navigate("Login");
    } catch (error) {
      setIsLoading(false);
      Alert.alert("Register Failed", "Please check your information again");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={blindbox} style={styles.image} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.registerText}>Register</Text>
        <View style={styles.form}>
          <View style={styles.nameContainer}>
            <View style={styles.firstNameContainer}>
              <Text style={styles.label}>Firstname</Text>
              <TextInput
                style={styles.input}
                placeholder="Your FirstName"
                keyboardType="default"
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
              />
            </View>

            <View style={styles.lastNameContainer}>
              <Text style={styles.label}>Lastname</Text>
              <TextInput
                style={styles.input}
                placeholder="Your LastName"
                keyboardType="default"
                value={lastName}
                onChangeText={(text) => setLastName(text)}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassWord(text)}
            />
          </View>

          {/* New Phone Number Field */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
            />
          </View>
        </View>

        {isLoading ? (
          <ActivityIndicator size="large" color="#d32f2f" />
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.linkText}>Have an account, yet?</Text>
        </TouchableOpacity>
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
    paddingVertical: 18,
    alignItems: "center",
  },
  registerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  form: {
    width: "80%",
    marginBottom: 20,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  firstNameContainer: {
    width: "48%",
  },
  lastNameContainer: {
    width: "48%",
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    color: "white",
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 16,
    color: "#333",
    borderWidth: 1,
    borderColor: "#ccc",
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
});

export default Register;
