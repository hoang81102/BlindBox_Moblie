import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import labubu from "../../assets/labubu.png";

const OrderHistory = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusText}>Delivered</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusText}>Canceled</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusText}>Refunded</Text>
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
            <Text style={styles.price}>544,000 VND</Text>
            <Text style={styles.text}> * 1</Text>
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.total}> 544,000 VND </Text>
          </View>
          <TouchableOpacity style={styles.received}>
            <Text style={styles.receivedText}>Status: </Text>
            <Text style={[styles.receivedText, { fontWeight: "bold" }]}>
              Delivered
            </Text>
          </TouchableOpacity>
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
  statusButton: {
    borderWidth: 0.8,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    textAlign: "center",
    color: "#FFFFFF", // Color of text inside the button (white)
    backgroundColor: "#d32f2f", // Red background matching the header
    borderColor: "#fff", // White border to stand out
  },
  statusText: {
    fontSize: 14,
    color: "#FFFFFF", // White text for better visibility
    fontWeight: "bold", // Bold text for emphasis
  },
  orderCard: {
    maxWidth: "95%",
    backgroundColor: "#FFFFFF", // White background for the order card
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
    color: "#0d0045", // Dark purple for additional information
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

  received: {
    flexDirection: "row",
  },
  receivedText: {
    fontSize: 14,
    color: "black",
  },
  cancel: {
    flexDirection: "row",
  },
  cancelText: {
    fontSize: 14,
    color: "#FF6347", // Red-orange for canceled status
  },
  refund: {
    flexDirection: "row",
  },
  refundText: {
    fontSize: 14,
    color: "#FFD700", // Yellow for refunded status
  },
});

export default OrderHistory;
