import { HandleApiError } from "./HandleApiError";
import ApiClient from "./ApiClient";
export const createPayment = async (orderId, totalPrice) => {
  try {
    const response = await ApiClient.post("/api/payments/createPaymentMB", {
      orderId: orderId,
      price: totalPrice,
    });
    return response.data;
  } catch (error) {
    HandleApiError(error);
  }
};
// API CẬP NHẬT TRẠNG THÁI THANH TOÁN THỦ CÔNG
export const changePaymentStatus = async (orderCode, orderId) => {
  try {
    const response = await ApiClient.patch(`/api/orders/paymentConfirmed`, {
      orderCode: orderCode,
      orderId: orderId,
    });
    return response.data;
  } catch (error) {
    console.log("Chưa thanh toán");
    HandleApiError(error);
  }
};
