// import React from "react";
// import { View } from "react-native";
// import DetailProduct from "../components/DetailProduct/DetailProduct";

// const DetailProductScreen = ({ route }) => {
//   const {
//     blindBoxId,
//     blindBoxName,
//     blindBoxType,
//     blindBoxPrice,
//     blindBoxDescription,
//     blindBoxImageUrl,
//     blindBoxStock,
//     packageId,
//     packageName,
//     packageType,
//     packagePrice,
//     packageDescription,
//     packageImageUrl,
//     packageStock,
//   } = route.params;

//   // Kiểm tra nếu các tham số không tồn tại thì gán giá trị mặc định
//   const normalizedData = {
//     id: blindBoxId || packageId,
//     name: blindBoxName || packageName,
//     type: blindBoxType || packageType,
//     price: blindBoxPrice || packagePrice,
//     description: blindBoxDescription || packageDescription,
//     imageUrl: blindBoxImageUrl || packageImageUrl || "", // Gán ảnh mặc định nếu không có
//     stock: blindBoxStock || packageStock || 0, // Gán số lượng mặc định là 0 nếu không có
//   };

//   return (
//     <View>
//       <DetailProduct
//         productId={normalizedData.id}
//         name={normalizedData.name}
//         type={normalizedData.type}
//         price={normalizedData.price}
//         description={normalizedData.description}
//         imageUrl={normalizedData.imageUrl}
//         stock={normalizedData.stock}
//       />
//     </View>
//   );
// };

// export default DetailProductScreen;

import React from "react";
import { View } from "react-native";
import DetailProduct from "../components/DetailProduct/DetailProduct";
import dimoo from "../assets/dimoo.jpg"; // Import ảnh mặc định

const DetailProductScreen = ({ route }) => {
  const {
    blindBoxId,
    blindBoxName,
    blindBoxType,
    blindBoxPrice,
    blindBoxDescription,
    blindBoxImageUrl,
    blindBoxStock,
    packageId,
    packageName,
    packageType,
    packagePrice,
    packageDescription,
    packageImageUrl,
    packageStock,
  } = route.params;

  // Kiểm tra nếu các tham số không tồn tại thì gán giá trị mặc định
  const normalizedData = {
    id: blindBoxId || packageId,
    name: blindBoxName || packageName,
    type: blindBoxType || packageType,
    price: blindBoxPrice || packagePrice,
    description: blindBoxDescription || packageDescription,
    imageUrl: blindBoxImageUrl || packageImageUrl || dimoo, // Gán ảnh mặc định nếu không có
    stock: blindBoxStock || packageStock || 0, // Gán số lượng mặc định là 0 nếu không có
  };

  return (
    <View>
      <DetailProduct
        productId={normalizedData.id}
        name={normalizedData.name}
        type={normalizedData.type}
        price={normalizedData.price}
        description={normalizedData.description}
        imageUrl={normalizedData.imageUrl}
        stock={normalizedData.stock}
      />
    </View>
  );
};

export default DetailProductScreen;
