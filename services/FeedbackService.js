import { HandleApiError } from "./HandleApiError";
import ApiClient from "./ApiClient";
export const getAllFeedbackBlindBox = async (productId) => {
  try {
    const response = await ApiClient.get(`/Blindbox/${productId}`);
    console.log("reponse Api review blindbox success");
    return response.data;
  } catch (error) {
    HandleApiError(error);
  }
};

export const getAllFeedbackPackage = async (productId) => {
  try {
    const response = await ApiClient.get(`/Package/${productId}`);
    console.log("response api review package success");
    return response.data;
  } catch (error) {
    HandleApiError(error);
  }
};
