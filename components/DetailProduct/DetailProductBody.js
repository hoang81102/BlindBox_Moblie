import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import labubu from "../../assets/labubu.png";
import { RadioButton } from "react-native-paper";

const DetailProductBody = () => {
  const [expanded, setExpanded] = useState(false); // State for toggling the description
  const [setSelection, setSetSelection] = useState("");
  const [stockStatus, setStockStatus] = useState("inStock");

  // Toggle read more or read less
  const handleReadMore = () => {
    setExpanded(!expanded);
  };

  // Handle set selection change
  const handleSetChange = (value) => {
    setSetSelection(value);
  };

  return (
    <View style={styles.component}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={labubu} style={styles.image} />
        </View>
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>Labubu - Limited Edition</Text>
          <Ionicons name="heart-outline" style={styles.icon} size={20} />
        </View>
        <View style={styles.priceInfo}>
          <Text style={styles.productPrice}>125.000VNĐ</Text>
          <Text style={styles.vatInfo}>VAT 10%</Text>
        </View>

        {/* Stock Status Section */}
        <View style={styles.stockStatus}>
          {stockStatus === "inStock" ? (
            <Text style={styles.inStock}>In Stock</Text>
          ) : (
            <Text style={styles.outOfStock}>Out of Stock</Text>
          )}
        </View>

        <View style={styles.description}>
          <Text style={styles.descriptionTitle}>Description Product</Text>
          <Text style={styles.descriptionText}>
            Blindbox is a random product. Store can't know in it what it is. It
            might contain something unique, rare, or unexpected that can
            surprise and delight you. Each blind box is a mystery waiting to be
            discovered, making it an exciting and fun experience for collectors
            and fans alike.
            {expanded && (
              <Text>
                {" "}
                This is an exclusive collection with limited quantities
                available. Don’t miss the chance to own a part of this special
                edition.
              </Text>
            )}
          </Text>
          <TouchableOpacity onPress={handleReadMore}>
            <Text style={styles.readMoreText}>
              {expanded ? "Read less..." : "Read more..."}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Set Selection Section */}
        <View style={styles.setSelection}>
          <Text style={styles.setTitle}>Set</Text>
          <View style={styles.boxContainer}>
            <TouchableOpacity
              style={[
                styles.box,
                setSelection === "Single box" && styles.boxActive,
              ]}
              onPress={() => handleSetChange("Single box")}
            >
              <Text
                style={
                  setSelection === "Single box" ? styles.boxActiveText : null
                }
              >
                Single box
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.box,
                setSelection === "Set of 10 boxes" && styles.boxActive,
              ]}
              onPress={() => handleSetChange("Set of 10 boxes")}
            >
              <Text
                style={
                  setSelection === "Set of 10 boxes"
                    ? styles.boxActiveText
                    : null
                }
              >
                Set of 10 boxes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    // Removed the red background here for better flexibility
    flexGrow: 1,
  },
  container: {
    flexDirection: "column",
  },
  imageContainer: {
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: 100,
    height: 200,
    resizeMode: "cover",
  },
  productInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#e0f7fa",
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  priceInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "bold",
  },
  vatInfo: {
    marginLeft: 10,
    fontSize: 14,
    backgroundColor: "#007aff",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 25,
    color: "white",
    fontWeight: "bold",
  },
  description: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  descriptionText: {
    color: "#333",
    fontSize: 14,
    lineHeight: 22,
  },
  readMoreText: {
    color: "#007BFF",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  setSelection: {
    marginTop: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  setTitle: {
    // fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  boxContainer: {
    flexDirection: "row",
    marginLeft: 20,
  },
  box: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#007BFF",
    borderRadius: 5,
    backgroundColor: "#f1f1f1",
  },
  boxActive: {
    backgroundColor: "#007BFF",
    borderColor: "#007BFF",
  },
  boxActiveText: {
    color: "#fff",
  },
  stockStatus: {
    marginTop: 10,
    paddingHorizontal: 15,
  },
  inStock: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
  outOfStock: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
});

export default DetailProductBody;
