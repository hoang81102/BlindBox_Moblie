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
  const handleCancelOrder = () => {
    Alert.alert(
      "Confirm cancellation",
      "Are you sure you want to cancel this order?",
      [
        { text: "No", style: "cancel" },
        { text: "Yes", onPress: () => console.log("Order has been canceled") },
      ]
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusText}>All Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusText}>Paid</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusText}>Pending Payment</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.orderCard}>
        <View style={styles.imageContainer}>
          <Image source={labubu} style={styles.image} />
        </View>
        <View>
          <Text style={styles.title}>Labubu - Limited Edition</Text>
          <Text style={styles.text}>Size S</Text>
          <View style={styles.subTotal}>
            <Text style={styles.price}>544.000 VND</Text>
            <Text style={styles.text}> * 1</Text>
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.total}> 544.000 VND </Text>
          </View>
          <TouchableOpacity style={styles.cancel} onPress={handleCancelOrder}>
            <Text style={styles.cancelText}>Cancel Order</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.orderCard}>
        <View style={styles.imageContainer}>
          <Image source={labubu} style={styles.image} />
        </View>
        <View>
          <Text style={styles.title}>Labubu - Limited Edition</Text>
          <Text style={styles.text}>Size S</Text>
          <View style={styles.subTotal}>
            <Text style={styles.price}>544.000 VND</Text>
            <Text style={styles.text}> * 1</Text>
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.total}> 544.000 VND </Text>
          </View>
          <View style={styles.statusDeliveryContainer}>
            <Text style={styles.statusDelivery}>Status: </Text>
            <Text style={[styles.statusDelivery, { fontWeight: "bold" }]}>
              Packaging by staff
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7", // Lighter background for consistency with the header
  },
  statusContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    padding: 10,
  },
  statusText: {
    fontSize: 14,
    color: "#2C3E50", // Chỉnh lại màu sắc cho đậm hơn (màu xám tối hơn)
    fontWeight: "bold", // Thêm font-weight để làm chữ đậm
  },

  statusButton: {
    backgroundColor: "#A5D8FF", // Giữ nguyên màu nền
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontSize: 14,
    textAlign: "center",
    color: "#2C3E50", // Giữ màu chữ ở đây cho rõ ràng
    borderColor: "#ccc",
    // Bạn có thể thử thay màu nền và viền để làm cho nó nổi bật hơn
  },

  orderCard: {
    maxWidth: "95%",
    backgroundColor: "#FFFFFF",
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 10,
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
    color: "#2C3E50", // Matching header text color
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: "#0d0045",
    marginVertical: 3,
  },
  subTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#DCDCDC",
    marginBottom: 4,
  },

  price: {
    fontSize: 16,
    color: "#2C3E50",
    fontWeight: "bold",
    textAlign: "right",
  },

  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#DCDCDC",
    marginBottom: 6,
  },

  totalLabel: {
    fontSize: 14,
    color: "#2C3E50",
    fontWeight: "bold",
  },

  total: {
    fontSize: 16,
    color: "#2C3E50",
    fontWeight: "bold",
    textAlign: "right",
  },

  cancel: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: "#E74C3C",
    borderRadius: 25,
    alignSelf: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },

  cancelText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  statusDeliveryContainer: {
    flexDirection: "row",
  },
  statusDelivery: {
    fontSize: 14,
    color: "black",
  },
});

export default CurrentOrders;
