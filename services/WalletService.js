import { HandleApiError } from "./HandleApiError";
import ApiClient from "./ApiClient";
export const getBalanceWallet = async (userId) => {
  try {
    const response = await ApiClient.get(`api/wallets/${userId}`);
    return response.data;
  } catch (error) {
    HandleApiError(error);
  }
};

export const createDeposit = async (userId, amount) => {
  try {
    const response = await ApiClient.post("/api/payments/createDepositMB", {
      accountId: userId,
      price: amount,
    });
    console.log("Api create deposit");
    return response.data;
  } catch (error) {
    HandleApiError(error);
  }
};

export const getWalletTransaction = async () => {
  try {
    const response = await ApiClient.get("/api/wallets/transactions", {
      pageNumber: 1,
    });
    return response.data;
  } catch (error) {
    HandleApiError(error);
  }
};
