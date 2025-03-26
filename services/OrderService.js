import ApiClient from "./ApiClient";
import { HandleApiError } from "./HandleApiError";

// Tạo đơn hàng
export const createOrder = async (
  accountId,
  price,
  priceTotal,
  addressId,
  discountMoney,
  note
) => {
  try {
    const response = await ApiClient.post("/api/orders", {
      accountId: accountId,
      price: price,
      priceTotal: priceTotal,
      addressId: addressId,
      discountMoney: discountMoney,
      note: note,
    });
    console.log("API ORDER ID:  ", response.data.orderId);
    return response.data;
  } catch (error) {
    HandleApiError(error);
  }
};

// Tạo chi tiết đơn hàng (multiple order details)
export const createMultipleOrderDetail = async (orderId, orderDetails) => {
  try {
    const response = await ApiClient.post(
      "/api/order-details/multiple-create",
      {
        orderId: orderId,
        orderDetails: orderDetails.map((product) => ({
          blindBoxId: product.blindBoxId || null,
          packageId: product.packageId || null,
          quantity: product.quantity,
          price: product.price,
        })),
      }
    );
    console.log("Createmultiple success");
    return response.data;
  } catch (error) {
    HandleApiError(error);
  }
};
// Api Lấy danh sách đơn hàng có orderStatus đang pending
export const getPendingOrder = async () => {
  try {
    const response = await ApiClient.get("/api/orders/checkOrder", {
      pageNumber: 1,
    });
    return response.data;
  } catch (error) {
    HandleApiError(error);
  }
};

export const getOrderDetail = async (orderId) => {
  try {
    const response = await ApiClient.get(`/api/order-details/order/${orderId}`);
    return response.data;
  } catch (error) {
    HandleApiError(error);
  }
};

// Nếu packageId == null, thì xài api này để lấy name
export const getInformationBlindBox = async (blindBoxId) => {
  try {
    const response = await ApiClient.get(`api/blindboxes/${blindBoxId}`);
    return response.data;
  } catch (error) {
    HandleApiError(error);
  }
};

export const getOrderConfirmed = async () => {
  try {
    const response = await ApiClient.get("api/orders/confirmed", {
      pageNumber: 1,
    });
    return response.data;
  } catch (error) {
    HandleApiError(error);
  }
};

export const getOrderDelivering = async () => {
  try {
    const response = await ApiClient.get("api/orders/delivering", {
      pageNumber: 1,
    });
    return response.data;
  } catch (error) {
    HandleApiError(error);
  }
};
export const getOrderCompleted = async () => {
  try {
    const response = await ApiClient.get("api/orders/completed", {
      pageNumber: 1,
    });
    return response.data;
  } catch (error) {
    HandleApiError(error);
  }
};
