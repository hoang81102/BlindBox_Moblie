import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiClient from "./ApiClient";
import { HandleApiError } from "./HandleApiError";
export const getRetailProductCategory = async () => {
  try {
    const response = await ApiClient.get("/api/category");
    // const blindBoxCategories = response.data.filter(
    //   (item) => item.typeSell === "BlindBox"
    // );
    const blindBoxCategories = response.data;
    return blindBoxCategories;
  } catch (error) {
    HandleApiError(error);
    console.log(error);
  }
};
export const getRetailProductByCategoryName = async (categoryName) => {
  try {
    const response = await ApiClient.get(
      `/api/blindboxes?searchByCategory=${categoryName}`
    );
    return response.data;
  } catch (error) {
    HandleApiError(error);
    console.log(error);
  }
};
