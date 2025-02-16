// import React from "react";
// import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import labubu from "../../assets/popmart.jpg"; // Hình ảnh sản phẩm
// import { useNavigation } from "@react-navigation/native";

// const OrderDetail = () => {
//   const navigation = useNavigation();
//   return (
//     <View style={styles.container}>
//       {/* Header - Back Button */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons
//             name="arrow-back-circle-outline"
//             size={30}
//             color="#2C3E50"
//             style={styles.back}
//           />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>Product Detail</Text>
//       </View>

//       {/* Product Image */}
//       <View style={styles.imageContainer}>
//         <Image source={labubu} style={styles.productImage} />
//       </View>

//       {/* Product Details */}
//       <View style={styles.detailsContainer}>
//         <Text style={styles.productTitle}>Labubu - Limited Edition</Text>
//         <Text style={styles.productPrice}>125,000 VNĐ</Text>
//       </View>

//       {/* Product Description */}
//       <View style={styles.descriptionContainer}>
//         <Text style={styles.descriptionTitle}>Description:</Text>
//         <Text style={styles.productDescription}>
//           Blindbox is a random product, and it’s available for a limited time.
//         </Text>
//       </View>

//       {/* Action Buttons */}
//       <View style={styles.actionsContainer}>
//         <TouchableOpacity style={styles.addToCartButton}>
//           <Ionicons name="cart-outline" size={20} color="#fff" />
//           <Text style={styles.buttonText}> Add to Cart </Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.checkoutButton}>
//           <Text style={styles.buttonText}> Checkout </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default OrderDetail;
