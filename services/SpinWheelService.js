import { HandleApiError } from "./HandleApiError";
import ApiClient from "./ApiClient";

// Lấy tất cả package có typesell = luckywheel
export const getAllPackageRelatedToLuckyWheel = async () => {
  try {
    const response = await ApiClient.get("api/packages/typeSell/LuckyWheel");
    return response.data;
  } catch (error) {
    HandleApiError(error);
  }
};

export const getPackageInformationByPackageName = async (packageName) => {
  try {
    const response = await ApiClient.get("api/packages", {
      searchByName: packageName,
    });
    return response.data;
  } catch (error) {
    HandleApiError(error);
  }
};

export const getWalletBalanceByUserId = async (userId) => {
  try {
    const response = await ApiClient.get(`api/wallets/${userId}`);
    return response.data;
  } catch (error) {
    HandleApiError(error);
  }
};
