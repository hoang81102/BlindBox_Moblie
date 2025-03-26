import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiClient from "./ApiClient";
import { HandleApiError } from "./HandleApiError";
export const saveUserData = async (
  firstName,
  lastName,
  id,
  phoneNumber,
  gender,
  accessToken
) => {
  try {
    await AsyncStorage.setItem("firstName", firstName);
    await AsyncStorage.setItem("lastName", lastName);
    await AsyncStorage.setItem("userId", id);
    await AsyncStorage.setItem("phoneNumber", phoneNumber);
    await AsyncStorage.setItem("gender", gender);
    await AsyncStorage.setItem("authToken", accessToken);
    console.log("Save success");
  } catch (error) {
    console.error("Error getting user data", error);
    return null;
  }
};
export const login = async (email, password) => {
  try {
    const response = await ApiClient.post("/api/Auth/login", {
      email,
      password,
    });
    const { firstName, lastName, id, phoneNumber, gender, accessToken } =
      response.data;
    console.log("firstName: ", firstName);
    console.log("userId: ", id);
    console.log("accessToken: ", accessToken);
    await saveUserData(
      firstName,
      lastName,
      id,
      phoneNumber,
      gender,
      accessToken
    );
    return response.data;
  } catch (error) {
    HandleApiError(error);
    throw error;
  }
};
export const register = async (
  firstName,
  lastName,
  email,
  password,
  phoneNumber,
  gender = "",
  address = ""
) => {
  try {
    const response = await ApiClient.post("/api/Auth/register", {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      gender,
      address,
    });
    return response.data;
  } catch (error) {
    HandleApiError(error);
    throw error;
  }
};
