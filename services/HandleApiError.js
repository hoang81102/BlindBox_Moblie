export const HandleApiError = (error) => {
  if (error.response) {
    console.error("Server Error:", error.response.data);
  } else if (error.request) {
    console.error("Network Error:", error.request);
  } else {
    console.error("Error:", error.message);
  }
};
// import { Alert } from "react-native";

// export const HandleApiError = (error) => {
//   if (error.response) {
//     // Server Error - thông tin từ server trả về
//     if (error.response.status === 400) {
//       console.error("Bad Request:", error.response.data);
//       Alert.alert("Lỗi", "Yêu cầu không hợp lệ. Vui lòng kiểm tra lại.");
//     } else if (error.response.status === 404) {
//       console.error("Not Found:", error.response.data);
//       Alert.alert("Lỗi", "Không tìm thấy tài nguyên.");
//     } else if (error.response.status === 500) {
//       console.error("Internal Server Error:", error.response.data);
//       Alert.alert("Lỗi", "Lỗi máy chủ. Vui lòng thử lại sau.");
//     } else {
//       console.error("Server Error:", error.response.data);
//       Alert.alert("Lỗi", "Lỗi từ máy chủ. Vui lòng thử lại.");
//     }
//   } else if (error.request) {
//     // Network Error - lỗi do mạng
//     console.error("Network Error:", error.request);
//     Alert.alert("Lỗi Mạng", "Lỗi kết nối mạng. Vui lòng kiểm tra lại.");
//   } else {
//     // General Error
//     console.error("Error:", error.message);
//     Alert.alert("Lỗi", "Có lỗi xảy ra. Vui lòng thử lại sau.");
//   }
// };
