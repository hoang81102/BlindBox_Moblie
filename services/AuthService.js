import ApiClient from "./ApiClient";
import { HandleApiError } from "./HandleApiError";
export const login = async (email, password) => {
  try {
    const response = await ApiClient.post("/api/Auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    HandleApiError(error);
    throw error;
  }
};
