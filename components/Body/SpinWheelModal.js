import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import labubu from "../../assets/labubu.png";
import babythree from "../../assets/babythree.jpg";
import hirono from "../../assets/hirono.jpg";
import dimoo from "../../assets/dimoo.jpg";
import smiski from "../../assets/smiski.jpg";

// Gắn ID cho mỗi sản phẩm
const products = [
  { id: 1, name: "Labubu", image: labubu },
  { id: 2, name: "BabyThree", image: babythree },
  { id: 3, name: "Hirono", image: hirono },
  { id: 4, name: "Dimoo", image: dimoo },
  { id: 5, name: "Smiski", image: smiski },
];

const SpinWheelModal = ({
  onClose,
  isVisible,
  spinDuration = 3000,
  spinInterval = 100,
}) => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [finalProduct, setFinalProduct] = useState(products[0]);
  const intervalRef = useRef(null);
  const opacity = useRef(new Animated.Value(1)).current; // Điều khiển hiệu ứng mờ
  const scale = useRef(new Animated.Value(1)).current; // Điều khiển hiệu ứng phóng to/thu nhỏ

  // Function bắt đầu quay
  const handleSpin = useCallback(() => {
    setIsSpinning(true);
    setFinalProduct(null); // Xóa kết quả cũ
    setTimeout(() => {
      setIsSpinning(false);
      clearInterval(intervalRef.current);
      const randomProductIndex = Math.floor(Math.random() * products.length);
      setFinalProduct(products[randomProductIndex]); // Lưu sản phẩm với ID
    }, spinDuration);
  }, [spinDuration]);

  // Cập nhật hình ảnh sản phẩm khi quay
  useEffect(() => {
    if (!isSpinning) return;

    intervalRef.current = setInterval(() => {
      setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, spinInterval);

    return () => clearInterval(intervalRef.current);
  }, [isSpinning, spinInterval]);

  // Hiệu ứng ẩn/hiện sản phẩm khi quay
  useEffect(() => {
    if (isSpinning) {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0, // Làm mờ ảnh đi
          duration: spinInterval / 2,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1, // Làm sáng lại ảnh
          duration: spinInterval / 2,
          useNativeDriver: true,
        }),
      ]).start();
      // Hiệu ứng phóng to thu nhỏ trong lúc quay
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.2, // Phóng to ảnh một chút
          duration: spinInterval / 2,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1, // Quay lại kích thước ban đầu
          duration: spinInterval / 2,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isSpinning, opacity, spinInterval, scale]);

  // Hiệu ứng làm sáng lại ảnh cuối cùng
  useEffect(() => {
    if (!isSpinning && finalProduct !== null) {
      Animated.timing(opacity, {
        toValue: 1, // Làm sáng lại ảnh cuối cùng
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [isSpinning, finalProduct, opacity]);

  if (!isVisible) return null;

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        {/* Nút đóng modal */}
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeText}>×</Text>
        </TouchableOpacity>

        <Text style={styles.headerText}>Spin the Wheel!</Text>
        {isSpinning ? (
          <Animated.View
            style={{
              opacity,
              transform: [{ scale }], // Thêm hiệu ứng phóng to thu nhỏ
            }}
          >
            <Image
              source={products[currentProductIndex].image}
              style={styles.image}
            />
          </Animated.View>
        ) : (
          // Sau khi quay xong, hiển thị ảnh kết quả
          <Animated.View
            style={{
              opacity,
              transform: [{ scale }],
            }}
          >
            {finalProduct && (
              <Image source={finalProduct.image} style={styles.image} />
            )}
          </Animated.View>
        )}

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.spinButton, isSpinning && styles.spinButtonDisabled]}
            onPress={handleSpin}
            disabled={isSpinning}
          >
            <Text style={styles.spinText}>Spin</Text>
          </TouchableOpacity>
        </View>
        {!isSpinning && finalProduct !== null && (
          <Text style={styles.resultText}>You won: {finalProduct.name}!</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Màu nền tối cho modal
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
  },
  modalContent: {
    backgroundColor: "#a10000", // Màu chủ đạo #a10000
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: 300,
    height: 400,
    position: "relative", // Đảm bảo nút tắt nằm trên cùng
  },
  headerText: {
    fontSize: 24,
    color: "white", // Màu chữ trắng để nổi bật trên nền đỏ
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  spinButton: {
    backgroundColor: "#ff5733", // Màu đỏ cam cho nút spin
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginTop: 10,
  },
  spinButtonDisabled: {
    backgroundColor: "#ff9999", // Màu nhạt khi nút disabled
  },
  spinText: {
    fontSize: 18,
    color: "white", // Màu chữ trắng cho nút Spin
    fontWeight: "bold",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
    backgroundColor: "transparent", // Nền trong suốt
  },
  closeText: {
    fontSize: 30,
    color: "white", // Màu chữ trắng cho nút Close
    fontWeight: "bold",
  },
  resultText: {
    fontSize: 18,
    color: "white", // Màu chữ trắng cho kết quả
    marginTop: 20,
  },
});

export default SpinWheelModal;
