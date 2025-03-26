import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Rating } from "react-native-ratings";
import * as ImagePicker from "expo-image-picker"; // Image Picker
import { useNavigation } from "@react-navigation/native";
import labubu from "../assets/labubu.jpg";
const FeedbackScreen = ({ isOpen }) => {
  const productInfo = [
    {
      image: labubu,
      name: "Labubu Limited Edition",
      quantity: 2,
      totalAmount: 300000,
    },
  ];

  const [image, setImage] = useState(null); // To store selected image
  const [rating, setRating] = useState(0); // To store rating
  const [isSecretSelected, setIsSecretSelected] = useState(null); // Null = none selected, 'Yes' = Yes selected, 'No' = No selected
  const [submit, setSubmit] = useState();
  const [reviewText, setReviewText] = useState("");
  const navigation = useNavigation();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  // Hàm xử lý khi bấm Yes hoặc No
  const handleSecretSelection = (value) => {
    setIsSecretSelected(value); // Chỉ thay đổi trạng thái khi bấm
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="chevron-left" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Your Feedback</Text>
      </View>

      <View style={styles.productInfo}>
        <Image source={productInfo[0].image} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text numberOfLines={1} style={styles.productName}>
            {productInfo[0].name}
          </Text>
          <Text style={styles.productDetailsText}>
            Quantity: {productInfo[0].quantity}
          </Text>
          <Text style={styles.productDetailsText}>
            Total: {productInfo[0].totalAmount} VND
          </Text>
        </View>
      </View>

      <View style={styles.ratingSection}>
        <Rating
          type="star"
          ratingCount={5}
          imageSize={40}
          startingValue={rating}
          onFinishRating={(rating) => setRating(rating)}
          ratingColor="#d32f2f"
          ratingBackgroundColor="#f0f0f0"
          showRating={false} // Hide the numeric rating label
        />
        {rating > 0 && (
          <Text style={styles.ratingDescription}>
            {rating === 1
              ? "Very Poor"
              : rating === 2
              ? "Poor"
              : rating === 3
              ? "Good"
              : rating === 4
              ? "Very Good"
              : "Excellent"}
          </Text>
        )}
      </View>

      <View style={styles.feedbackButtons}>
        <Text style={styles.feedbackText}>Did you win the secret product?</Text>
        <View style={styles.buttonSecretConfirm}>
          <TouchableOpacity
            style={[
              styles.secretButton,
              isSecretSelected === "Yes" && styles.secretButtonActive, // Chỉ áp dụng khi chọn Yes
            ]}
            onPress={() => handleSecretSelection("Yes")}
          >
            <Text style={styles.secretButtonText}>Yes, Secret</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.secretButton,
              isSecretSelected === "No" && styles.secretButtonActive, // Chỉ áp dụng khi chọn No
            ]}
            onPress={() => handleSecretSelection("No")}
          >
            <Text style={styles.secretButtonText}>No, I didn't</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.reviewSection}>
        <Text style={styles.reviewTitle}>Write your review:</Text>
        <TextInput
          style={styles.textInput}
          multiline={true}
          numberOfLines={2}
          placeholder="Write your feedback here..."
          value={reviewText}
          onChangeText={setReviewText}
        />
      </View>
      <View style={styles.imagePicker}>
        <Text style={styles.uploadText}>Upload Image</Text>
        <TouchableOpacity
          onPress={pickImage}
          style={styles.pickImageButton}
          activeOpacity={0.8} // Giảm độ mờ khi bấm
        >
          <FontAwesome5 name="cloud-upload-alt" style={styles.uploadIcon} />
          <Text style={styles.pickImageButtonText}>Click here to Upload</Text>
        </TouchableOpacity>
        {image && (
          <View style={styles.uploadedImageContainer}>
            <Image source={{ uri: image }} style={styles.uploadedImage} />
          </View>
        )}
      </View>

      <View style={styles.submit}>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}> Submit </Text>
        </TouchableOpacity>
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
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 40,
    backgroundColor: "#d32f2f", // Red background for header
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: {
    textAlign: "center",
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  productInfo: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f9f9f9", // Light gray background for product info
    borderRadius: 15,
    marginHorizontal: 15,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000", // Add shadow for depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // For Android shadow
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginRight: 20,
    borderWidth: 2,
    borderColor: "#d32f2f",
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginBottom: 5,
  },
  productDetailsText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 3,
  },
  ratingSection: {
    marginTop: 20,
    alignItems: "center",
  },
  ratingText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
  ratingDescription: {
    fontSize: 16,
    color: "#d32f2f",
    marginTop: 10,
    fontWeight: "bold",
  },
  feedbackButtons: {
    marginTop: 30,
    paddingHorizontal: 20,
    borderTopWidth: 0.2,
    borderTopColor: "#ddd",
    paddingBottom: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 15,
  },
  feedbackText: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#333", // Màu tối cho tiêu đề
  },
  buttonSecretConfirm: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10, // Khoảng cách giữa các nút
  },
  secretButton: {
    backgroundColor: "#555",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 10,
    alignItems: "center",
    width: "48%",
  },
  secretButtonActive: {
    backgroundColor: "#9a0007",
  },
  secretButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold", // Làm chữ đậm để dễ nhìn hơn
  },
  // Phần nhập review
  reviewSection: {
    marginTop: 10,
    marginHorizontal: 15, // Đảm bảo khoảng cách đều hai bên
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333", // Màu tối cho tiêu đề
    marginBottom: 10, // Khoảng cách giữa tiêu đề và ô nhập liệu
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc", // Màu sáng cho đường viền
    borderRadius: 10, // Góc bo tròn
    fontSize: 16, // Kích thước chữ hợp lý
    color: "#333", // Màu chữ tối
    backgroundColor: "#f9f9f9", // Nền sáng
    height: 80, // Chiều cao cho ô nhập liệu lớn hơn một chút
    textAlignVertical: "top", // Căn chỉnh văn bản lên trên
    shadowColor: "#000", // Đặt màu cho bóng
    shadowOffset: { width: 0, height: 2 }, // Đặt độ lệch cho bóng
    shadowOpacity: 0.1, // Độ mờ của bóng
    shadowRadius: 5, // Độ lan tỏa của bóng
    elevation: 3, // Thêm hiệu ứng bóng đổ trên Android
  },
  // Đồng bộ cho phần image picker
  imagePicker: {
    marginVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 15,
    borderWidth: 1,
    paddingBottom: 10,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  uploadText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
    fontWeight: "500",
  },
  pickImageButton: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    paddingVertical: 20,
    paddingHorizontal: 30,
    // borderRadius: 25,
    alignItems: "center",
    marginTop: 15,
    width: "100%",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  pickImageButtonText: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    marginLeft: 10,
  },
  uploadIcon: {
    color: "black",
    fontSize: 20,
  },

  // Phần ảnh đã tải lên
  uploadedImageContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  uploadedImage: {
    width: 180,
    height: 180,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
  },
  submit: {
    paddingHorizontal: 120,
  },
  //Nút submit
  submitButton: {
    backgroundColor: "#a10000",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",

    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  submitText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default FeedbackScreen;
