import { View, StyleSheet } from "react-native";
import Wallet from "../components/Wallet/Wallet";
const WalletScreen = () => {
  return (
    <View style={styles.container}>
      <Wallet />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default WalletScreen;
