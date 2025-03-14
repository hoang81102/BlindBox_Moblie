import AsyncStorage from "@react-native-async-storage/async-storage";

const GetAuthToken = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken"); // Lấy token từ AsyncStorage
    return token; // Trả về token nếu có
  } catch (error) {
    console.error("Error getting token from AsyncStorage", error);
    return null; // Nếu có lỗi, trả về null
  }
};

export default GetAuthToken;
