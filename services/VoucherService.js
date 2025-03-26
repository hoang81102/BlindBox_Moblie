import { HandleApiError } from "./HandleApiError";
import ApiClient from "./ApiClient";
export const getVoucherAvailable = async (totalPrice) => {
  try {
    const response = await ApiClient.get("/api/voucher/available-voucher", {
      params: { totalPrice },
    });
    console.log("response data api voucher: ", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    // HandleApiError(error);
  }
};
