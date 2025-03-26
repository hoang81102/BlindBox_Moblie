import ApiClient from "./ApiClient";
import { HandleApiError } from "./HandleApiError";
export const getAllAddress = async (userId, pageNumber, pageSize) => {
  try {
    const response = await ApiClient.get(`/api/Address/account/${userId}`, {
      pageNumber,
      pageSize,
    });
    return response.data;
  } catch (error) {
    HandleApiError(error);
  }
};
export const createAddress = async (
  accountId,
  addressLine1,
  addressLine2,
  phoneNumber,
  nameReceiver,
  city,
  state,
  postalCode,
  country,
  isDefault = true // Mặc định là true nếu không có giá trị
) => {
  try {
    const response = await ApiClient.post("api/Address", {
      accountId: accountId,
      addressLine1: addressLine1,
      addressLine2: addressLine2 || "", // Đảm bảo nếu không có giá trị, sẽ để chuỗi rỗng
      phoneNumber: phoneNumber,
      nameReceiver: nameReceiver,
      city: city || "", // Để chuỗi rỗng nếu không có giá trị
      state: state || "", // Để chuỗi rỗng nếu không có giá trị
      postalCode: postalCode || "", // Để chuỗi rỗng nếu không có giá trị
      country: country || "", // Để chuỗi rỗng nếu không có giá trị
      isDefault: isDefault,
    });
    return response.data;
  } catch (error) {
    HandleApiError(error);
  }
};
// Đây là cách api trả về
// [
//   {
//     "addressId": "ddbc11da-61ab-416b-8ead-2bab9245e38b",
//     "accountId": "4e3c0d64-b87e-4b26-9a1e-4f4ec249a3bc",
//     "addressLine1": "827/18",
//     "addressLine2": "",
//     "phoneNumber": "0123456789",
//     "nameReceiver": "QuangDo",
//     "city": "Ho Chi Minh",
//     "state": "",
//     "postalCode": "10000",
//     "country": "Viet Nam",
//     "isDefault": true,
//     "createdAt": "0001-01-01T00:00:00",
//     "updatedAt": "0001-01-01T00:00:00",
//     "orderId": null,
//     "applicationUser": null
//   },
//   {
//     "addressId": "ea0398d3-0633-40b8-8057-4e1cdbb538d7",
//     "accountId": "4e3c0d64-b87e-4b26-9a1e-4f4ec249a3bc",
//     "addressLine1": "Thao Dien",
//     "addressLine2": "",
//     "phoneNumber": "0111222333",
//     "nameReceiver": "Lam",
//     "city": "Ho Chi Min",
//     "state": "",
//     "postalCode": "10000",
//     "country": "VietNam",
//     "isDefault": false,
//     "createdAt": "0001-01-01T00:00:00",
//     "updatedAt": "0001-01-01T00:00:00",
//     "orderId": null,
//     "applicationUser": null
//   },
//   {
//     "addressId": "927c134e-1a4e-4fb4-83e4-6fb6a5a75af0",
//     "accountId": "4403766a-d9f5-4e98-a5fc-a29a373b8b80",
//     "addressLine1": "thhhh",
//     "addressLine2": "",
//     "phoneNumber": "1234567890",
//     "nameReceiver": "thhh",
//     "city": "",
//     "state": "",
//     "postalCode": "",
//     "country": "",
//     "isDefault": true,
//     "createdAt": "0001-01-01T00:00:00",
//     "updatedAt": "0001-01-01T00:00:00",
//     "orderId": null,
//     "applicationUser": null
//   },
