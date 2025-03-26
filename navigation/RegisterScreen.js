import { View, StyleSheet } from "react-native";
import Register from "../components/Authentication/Register";
const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Register />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default RegisterScreen;
