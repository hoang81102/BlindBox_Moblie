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

const OrderHistory = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Order History</Text> */}
      {/* Đây là phần trạng thái */}
      <View style={styles.statusContainer}>
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusText}>Đã nhận hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusText}>Đã huỷ hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusText}>Đã hoàn tiền</Text>
        </TouchableOpacity>
      </View>
      {/* Đây là phần các thẻ orderCard */}
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
          <TouchableOpacity style={styles.received}>
            <Text style={styles.receivedText}> Trạng thái: </Text>
            <Text style={[styles.receivedText, { fontWeight: "bold" }]}>
              {" "}
              Đã nhận hàng
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

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
          <TouchableOpacity style={styles.cancel}>
            <Text style={styles.cancelText}> Trạng thái: </Text>
            <Text style={[styles.cancelText, { fontWeight: "bold" }]}>
              {" "}
              Đã huỷ hàng
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

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
          <TouchableOpacity style={styles.refund}>
            <Text style={styles.refundText}> Trạng thái: </Text>
            <Text style={[styles.refundText, { fontWeight: "bold" }]}>
              {" "}
              Đã hoàn tiền
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 4,
  },
  // Phần status
  statusContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
  },
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
  // Phần orderCard
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
  received: {
    flexDirection: "row",
  },
  cancel: {
    flexDirection: "row",
  },
  refund: {
    flexDirection: "row",
  },
});

export default OrderHistory;
