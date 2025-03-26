import axios from "axios";
import GetAuthToken from "./GetAuthToken"; // Đảm bảo bạn có phương thức này để lấy token
import config from "../config/config";

// Tạo API client với cấu hình mặc định
const ApiClient = axios.create({
  baseURL: config.api.baseUrl, // Địa chỉ API backend
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Thêm interceptor để tự động thêm token vào mỗi yêu cầu nếu có
ApiClient.interceptors.request.use(
  async (config) => {
    const token = await GetAuthToken(); // Lấy token từ storage hoặc backend
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Thêm token vào header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); // Nếu có lỗi trong yêu cầu, trả về lỗi
  }
);

// Interceptor cho phản hồi để xử lý token hết hạn
ApiClient.interceptors.response.use(
  (response) => response, // Trả về phản hồi nếu thành công
  async (error) => {
    // Kiểm tra lỗi trả về từ API (ví dụ, token hết hạn)
    if (error.response && error.response.status === 401) {
      // Nếu token hết hạn, làm mới token hoặc yêu cầu đăng nhập lại
      console.log("Token expired. Need to refresh.");
      // Gọi phương thức làm mới token nếu có hoặc yêu cầu đăng nhập lại
      // Refresh token hoặc yêu cầu đăng nhập lại
    }
    return Promise.reject(error); // Trả về lỗi nếu có
  }
);

export default ApiClient;
