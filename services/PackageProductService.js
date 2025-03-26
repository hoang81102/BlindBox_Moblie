import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiClient from "./ApiClient";
import { HandleApiError } from "./HandleApiError";
export const getPackageProductCategory = async () => {
  try {
    const response = await ApiClient.get("/api/category");
    const packageCategories = response.data;
    return packageCategories;
  } catch (error) {
    HandleApiError(error);
    console.log(error);
  }
};
export const getPackageProductByCategoryName = async (categoryName) => {
  try {
    const response = await ApiClient.get(
      `/api/packages?searchByCategory=${categoryName}`
    );
    return response.data;
  } catch (error) {
    HandleApiError(error);
    console.log(error);
  }
};
