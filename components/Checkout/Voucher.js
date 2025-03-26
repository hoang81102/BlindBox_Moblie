import { useEffect, useState } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import { getVoucherAvailable } from "../../services/VoucherService";

const Voucher = ({ subtotal, total, setDiscount }) => {
  const [availableVouchers, setAvailableVouchers] = useState([]);

  useEffect(() => {
    const fetchVoucherAvailable = async () => {
      try {
        const response = await getVoucherAvailable(subtotal);

        // Trường hợp API trả về có data ở trong object
        const vouchers = Array.isArray(response)
          ? response
          : Array.isArray(response?.data)
          ? response.data
          : [];

        const filtered = vouchers.filter((voucher) => {
          return total - voucher.discountMoney > voucher.totalPrice;
        });

        await setAvailableVouchers(filtered);

        if (filtered.length > 0) {
          const bestVoucher = filtered.reduce((max, curr) =>
            curr.discountMoney > max.discountMoney ? curr : max
          );
          setDiscount(bestVoucher.discountMoney);
        } else {
          setDiscount(0);
        }
      } catch (error) {
        console.error("Lỗi khi lấy voucher:", error);
        setDiscount(0);
      }
    };

    fetchVoucherAvailable();
  }, [subtotal, total]);

  return (
    <View style={{ padding: 15 }}>
      {availableVouchers.length > 0 ? (
        <Text>
          ✅ Đã áp dụng {availableVouchers.length} voucher. Được giảm{" "}
          {availableVouchers
            .find(
              (v) =>
                v.discountMoney ===
                Math.max(...availableVouchers.map((v) => v.discountMoney))
            )
            ?.discountMoney.toLocaleString()}{" "}
          đ
        </Text>
      ) : (
        <Text>❌ Không có voucher nào phù hợp</Text>
      )}
    </View>
  );
};

export default Voucher;
