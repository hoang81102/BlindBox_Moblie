import { HandleApiError } from "./HandleApiError";
import ApiClient from "./ApiClient";
export const AddToCart = async (userId, blindboxId, packageId, quantity) => {
  try {
    const response = await ApiClient.post(
      "/cart-management/managed-carts/add-to-cart",
      {
        userId,
        blindboxId,
        packageId,
        quantity,
      }
    );
    console.log("Data : ", userId, blindboxId, packageId, quantity);
    return response.data;
  } catch (error) {
    HandleApiError(error);
  }
};
export const getItemsInCartByUserId = async (userId) => {
  try {
    const response = await ApiClient.get(
      `cart-management/managed-carts/${userId}`
    );
    console.log("Get item in cart: ", response.data);
    return response.data;
    // [
    //   {
    //     "cartId": "3f8e39a7-d6fe-48ec-85da-21167c7095cd",
    //     "blindBoxId": "af6d8e71-a002-460a-b328-db386898d750",
    //     "packageId": null,
    //     "quantity": 1,
    //     "createDate": "2025-03-23T08:13:40.1067677",
    //     "userId": "4403766a-d9f5-4e98-a5fc-a29a373b8b80",
    //     "applicationUser": null
    //   },
    //   {
    //     "cartId": "4faa1413-907d-41cb-a136-a1906dc30ad8",
    //     "blindBoxId": null,
    //     "packageId": "b12fede9-80ca-447b-8c8e-5083607e96df",
    //     "quantity": 1,
    //     "createDate": "2025-03-23T08:06:23.0967323",
    //     "userId": "4403766a-d9f5-4e98-a5fc-a29a373b8b80",
    //     "applicationUser": null
    //   }
    // ]
  } catch (error) {
    HandleApiError(error);
  }
};
export const getInformationPackageById = async (packageId) => {
  try {
    const response = await ApiClient.get(`api/packages/${packageId}`);
    console.log("Đã lấy thông tin package");
    return response.data;
    // {
    //   "packageId": "b12fede9-80ca-447b-8c8e-5083607e96df",
    //   "categoryId": "e8c9def9-81e4-429f-abf1-484df7927fe1",
    //   "packageName": "hehehehe",
    //   "typeSell": "Package",
    //   "packagePrice": 50,
    //   "description": "adfasfdaf",
    //   "stock": 50,
    //   "amount": 50,
    //   "packageStatus": "fdfafd",
    //   "category": null,
    //   "images": null,
    //   "blindBoxes": null,
    //   "orderDetails": null
    // }
  } catch (error) {
    HandleApiError(error);
  }
};
export const getInformationBlindBoxById = async (blindboxId) => {
  try {
    const response = await ApiClient.get(`api/blindboxes/${blindboxId}`);
    console.log("Đã lấy thông tin blindbox");
    return response.data;
    // {
    //   "blindBoxId": "af6d8e71-a002-460a-b328-db386898d750",
    //   "packageId": "b12fede9-80ca-447b-8c8e-5083607e96df",
    //   "package": null,
    //   "categoryId": "e8c9def9-81e4-429f-abf1-484df7927fe1",
    //   "category": null,
    //   "blindBoxName": "vcl",
    //   "typeSell": "BlindBox",
    //   "size": "asdasd",
    //   "price": 1000,
    //   "description": "asdasd",
    //   "stock": 60,
    //   "createdAt": "2025-03-22T19:50:16.618",
    //   "updatedAt": "2025-03-22T20:08:25.389",
    //   "percent": 60,
    //   "blindBoxStatus": "asdasd",
    //   "blindBoxImages": []
    // }
  } catch (error) {
    HandleApiError(error);
  }
};
