import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  Alert,
} from "react-native";
import labubu from "../../assets/labubu.png";

const CurrentOrders = () => {
  // Hàm xử lý khi nhấn "Huỷ đơn"
  const handleCancelOrder = () => {
    Alert.alert(
      "Xác nhận huỷ đơn",
      "Bạn có chắc chắn muốn huỷ đơn hàng này không?",
      [
        { text: "Không", style: "cancel" },
        { text: "Có", onPress: () => console.log("Đơn hàng đã bị huỷ") },
      ]
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusText}>Tất cả</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusText}>Đã thanh toán</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusText}>Chờ thanh toán</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusText}>Đã hoàn tiền</Text>
        </TouchableOpacity> */}
      </View>
      <TouchableOpacity style={styles.orderCard}>
        <View style={styles.imageContainer}>
          <Image source={labubu} style={styles.image} />
        </View>
        <View>
          <Text style={styles.title}>Labubu - Phiên bản giới hạn</Text>
          <Text style={styles.text}>Size S</Text>
          <View style={styles.subTotal}>
            <Text style={styles.price}>544.000Đ</Text>
            <Text style={styles.text}> * 1</Text>
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Tổng cộng:</Text>
            <Text style={styles.total}> 544.000Đ </Text>
          </View>
          <TouchableOpacity style={styles.cancel} onPress={handleCancelOrder}>
            <Text style={styles.cancelText}>Huỷ đơn</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.orderCard}>
        <View style={styles.imageContainer}>
          <Image source={labubu} style={styles.image} />
        </View>
        <View>
          <Text style={styles.title}>Labubu - Phiên bản giới hạn </Text>
          <Text style={styles.text}>Size S</Text>
          <View style={styles.subTotal}>
            <Text style={styles.price}>544.000Đ</Text>
            <Text style={styles.text}> * 1</Text>
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Tổng cộng:</Text>
            <Text style={styles.total}> 544.000Đ </Text>
          </View>
          <Text style={styles.status}>Trạng thái: Nhân viên đang đóng gói</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
  },
  statusContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
  },
  // statusButton: {
  //   marginLeft: 5,
  // },
  statusText: {
    borderWidth: 0.8,
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontSize: 14,
    textAlign: "center",
    color: "#333",
    borderColor: "#ccc",
  },
  orderCard: {
    maxWidth: "100%",
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: "row",
    flexShrink: 1,
    minHeight: 160,
    marginBottom: 10,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: "cover",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#190054", // Màu xanh đậm cho tiêu đề
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: "#0d0045", // Màu đậm cho các thông tin phụ
    marginVertical: 3,
  },
  subTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    color: "#52008c", // Màu tím cho giá
    fontWeight: "bold",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
    marginBottom: 10,
  },
  totalLabel: {
    fontSize: 16,
    color: "#52008c", // Dùng màu giống giá
    fontWeight: "bold",
  },
  total: {
    fontSize: 18,
    color: "#FF6347", // Dùng màu đỏ cam cho tổng để nổi bật hơn
    fontWeight: "bold",
  },
  status: {
    fontSize: 14,
    color: "#9B6FC4", // Màu nhẹ cho trạng thái
    fontStyle: "italic",
    marginTop: 10,
  },
  cancel: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: "#D32F2F",
    borderRadius: 20,
    alignSelf: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cancelText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default CurrentOrders;
