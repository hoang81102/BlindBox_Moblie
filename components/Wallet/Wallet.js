import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import personalPhoto from "../../assets/man.jpg";
import { FontAwesome5 } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import HistoryTransaction from "./HistoryTransaction";
import DepositModal from "./DepositModal";
import { useNavigation } from "@react-navigation/native";
import { getBalanceWallet, createDeposit } from "../../services/WalletService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Wallet = () => {
  const navigation = useNavigation();
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [balance, setBalance] = useState(0);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter); // Cập nhật filter đã chọn
  };

  const openDepositModal = () => {
    setIsModalVisible(true); // Mở Modal
  };

  const closeDepositModal = () => {
    setIsModalVisible(false); // Đóng Modal
  };

  const handleDepositSuccess = async () => {
    const storeUserId = await AsyncStorage.getItem("userId");
    if (storeUserId) {
      const updatedBalance = await getBalanceWallet(storeUserId);
      setBalance(updatedBalance.balance); // Cập nhật balance từ API sau khi nạp tiền thành công
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const storeUserId = await AsyncStorage.getItem("userId");
      if (storeUserId) {
        const storeBalance = await getBalanceWallet(storeUserId);
        setBalance(storeBalance.balance); // Đảm bảo chỉ lấy balance
      }
    };
    fetchData(); // Gọi hàm!
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileSectionContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5 name="chevron-left" style={styles.iconLeft} />
          </TouchableOpacity>
          <View style={styles.profileSection}>
            <Image source={personalPhoto} style={styles.profileImage} />
            <Text style={styles.walletTitle}>Your Wallet</Text>
          </View>
        </View>
        <View style={styles.balanceSectionContainer}>
          <View style={styles.balanceSection}>
            <Text style={styles.balanceLabel}>Available Balance</Text>
            <Text style={styles.balanceAmount}>{balance} VNĐ</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={openDepositModal}>
            <FontAwesome5 name="credit-card" style={styles.iconCreditCard} />
            <Text style={styles.buttonText}>Deposit</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeDepositModal} // Đóng modal khi bấm vào ngoài
      >
        <DepositModal
          onClose={closeDepositModal}
          onDepositSuccess={handleDepositSuccess}
        />
      </Modal>

      <View style={styles.body}>
        <View style={styles.filterSelection}>
          {["All", "Deposit", "Payment"].map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterItem,
                selectedFilter === filter && styles.selectedFilter, // Thêm style nếu filter được chọn
              ]}
              onPress={() => handleFilterChange(filter)} // Cập nhật khi chọn filter
            >
              <Text
                style={[
                  styles.filterText,
                  selectedFilter === filter && styles.selectedFilterText, // Thêm style cho chữ khi filter được chọn
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View>
          <Text style={styles.transactionText}>Recent Transaction</Text>
          {/* Kiểm tra nếu filter không có giao dịch */}
          {selectedFilter === "All" && <HistoryTransaction type="All" />}
          {selectedFilter === "Deposit" && (
            <HistoryTransaction type="Deposit" />
          )}
          {selectedFilter === "Payment" && (
            <HistoryTransaction type="Payment" />
          )}
          {selectedFilter !== "All" &&
            selectedFilter !== "Deposit" &&
            selectedFilter !== "Payment" && (
              <Text>No transactions to display</Text>
            )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#d32f2f", // Màu nền đỏ cho header
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Đổ bóng cho header
  },
  profileSectionContainer: {
    flexDirection: "row",
  },
  iconLeft: {
    marginTop: 30,
    fontSize: 20,
    color: "white",
  },
  profileSection: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#fff",
    marginBottom: 10,
  },
  walletTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },
  balanceSectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  balanceSection: {
    alignItems: "flex-start",
  },
  balanceLabel: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "300",
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#d32f2f",
    fontSize: 16,
    fontWeight: "600",
  },
  iconCreditCard: {
    fontSize: 20,
    color: "#d32f2f",
    marginRight: 10,
  },
  body: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  // Phần filterSelection
  filterSelection: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop: 10,
  },
  filterItem: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  selectedFilter: {
    backgroundColor: "#d32f2f", // Nền đỏ cho filter được chọn
  },
  filterText: {
    fontSize: 16,
    color: "#333", // Màu chữ mặc định
  },
  selectedFilterText: {
    color: "#fff", // Màu chữ trắng khi filter được chọn
  },
  transactionText: {
    color: "black",
    fontSize: 20,
    paddingVertical: 10,
  },
});

export default Wallet;
