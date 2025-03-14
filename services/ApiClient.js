import axios from "axios";
import GetAuthToken from "./GetAuthToken";

// Tạo API client với cấu hình mặc định
const ApiClient = axios.create({
  baseURL: "http://10.0.2.2:5000", // Android Emulator đang xài 10.0.2.2
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Thêm interceptor để tự động thêm token vào mỗi yêu cầu nếu có
ApiClient.interceptors.request.use(
  async (config) => {
    const token = await GetAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Thêm token vào header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); // Nếu có lỗi trong yêu cầu, trả về lỗi
  }
);

export default ApiClient;
