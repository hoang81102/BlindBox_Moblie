import { HandleApiError } from "./HandleApiError";
import ApiClient from "./ApiClient";

const createOrder = async (accountId, price, priceTotal, deliveryAddress) => {
  const response = await ApiClient.post("/api/orders", {
    params: {
      accountId,
    },
  });
};
