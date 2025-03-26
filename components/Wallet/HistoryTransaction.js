import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import withdraw from "../../assets/withdraw.png";
import payment from "../../assets/payment.png";
import deposit from "../../assets/deposit.png";
import { useEffect, useState } from "react";
import { getWalletTransaction } from "../../services/WalletService";

const HistoryTransaction = ({ type }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hàm format tiền VNĐ
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setLoading(true);
        const data = await getWalletTransaction();
        if (data && data.items) {
          setTransactions(data.items); // Cập nhật danh sách giao dịch từ API
        }
      } catch (error) {
        console.error("Failed to fetch transactions", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  // Lọc các giao dịch dựa trên loại đã chọn
  const filteredTransactions =
    type === "All"
      ? transactions
      : transactions.filter((t) => t.transactionType === type);

  // Kiểm tra nếu dữ liệu đang được tải
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#d32f2f" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {filteredTransactions.length > 0 ? (
        filteredTransactions.map((transaction, index) => {
          let icon;
          let label;
          switch (transaction.transactionType) {
            case "deposit":
              icon = deposit;
              label = "Deposit";
              break;
            case "payment":
              icon = payment;
              label = "Payment";
              break;
            default:
              icon = null;
              label = "Unknown";
              break;
          }
          return (
            <View key={index} style={styles.transactionContainer}>
              <Image source={icon} style={styles.transactionImage} />
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionLabel}>{label}</Text>
                <Text style={styles.transactionDate}>
                  {transaction.transactionDate}
                </Text>
              </View>
              <Text style={styles.transactionAmount}>
                {formatCurrency(transaction.amount)}
              </Text>
            </View>
          );
        })
      ) : (
        <Text style={styles.noTransactionsText}>No transactions available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20, // Khoảng cách giữa các giao dịch
  },
  transactionContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Thêm bóng đổ cho mỗi giao dịch
    marginBottom: 10,
  },
  transactionImage: {
    width: 40,
    height: 40,
    marginRight: 15,
    borderRadius: 20, // Bo tròn hình ảnh
  },
  transactionInfo: {
    flex: 1,
  },
  transactionLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  transactionDate: {
    fontSize: 14,
    color: "#777",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#d32f2f", // Màu đỏ cho số tiền
  },
  noTransactionsText: {
    textAlign: "center",
    fontSize: 16,
    color: "#777",
  },
});

export default HistoryTransaction;
