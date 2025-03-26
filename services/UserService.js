import ApiClient from "./ApiClient";
import { HandleApiError } from "./HandleApiError";
export const getUserInformation = async (userId) => {
  try {
    const response = await ApiClient.get(`/api/Auth/user/${userId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    HandleApiError(error);
  }
};

export const updateUserInformation = async (
  userId,
  firstName,
  lastName,
  email,
  phoneNumber,
  gender
) => {
  try {
    const response = await ApiClient.put(`/api/admin/users/${userId}`, {
      firstName,
      lastName,
      email,
      phoneNumber,
      gender,
    });
  } catch (error) {
    HandleApiError(error);
  }
};
