import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import voucher from "../../assets/voucher.jpg";
import Footer from "../Footer/Footer";
const NotificationPage = () => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.item}>
          <Image source={voucher} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Khuyến mãi hấp dẫn</Text>
            <Text style={styles.description}>
              Nhận voucher giảm giá 20% cho đơn hàng tiếp theo của bạn.
            </Text>
            <Text style={styles.date}>Ngày thông báo: 12/02/2025</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Image source={voucher} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Khuyến mãi hấp dẫn</Text>
            <Text style={styles.description}>
              Nhận voucher giảm giá 20% cho đơn hàng tiếp theo của bạn.
            </Text>
            <Text style={styles.date}>Ngày thông báo: 12/02/2025</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Image source={voucher} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Khuyến mãi hấp dẫn</Text>
            <Text style={styles.description}>
              Nhận voucher giảm giá 20% cho đơn hàng tiếp theo của bạn.
            </Text>
            <Text style={styles.date}>Ngày thông báo: 12/02/2025</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9", // Màu nền nhẹ cho trang
  },
  item: {
    flexDirection: "row", // Sắp xếp hình ảnh và text theo chiều ngang
    backgroundColor: "#fff", // Màu nền của từng item
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Hiệu ứng đổ bóng
    minHeight: 100,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
    resizeMode: "cover",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  date: {
    fontSize: 12,
    color: "#999", // Màu xám nhạt cho ngày
    marginTop: 5,
  },
});

export default NotificationPage;
