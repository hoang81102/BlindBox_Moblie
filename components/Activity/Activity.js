// import React from "react";
// import { View, StyleSheet } from "react-native";
// import ActivityHeader from "./ActivityHeader";
// import ActivityBody from "./ActivityBody";

// const Activity = () => {
//   return (
//     <View style={styles.container}>
//       <ActivityHeader />
//       <ActivityBody />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     height: "100%",
//   },
// });

// export default Activity;

import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ActivityHeader from "./ActivityHeader";
import ActivityBody from "./ActivityBody";
import Footer from "../Footer/Footer";
const Activity = () => {
  const [selectedTab, setSelectedTab] = useState("current");

  // Hàm cập nhật giá trị khi người dùng chọn tab
  const handleTabChange = (value) => {
    setSelectedTab(value);
  };

  return (
    <View style={styles.container}>
      {/* Header không cuộn */}
      <ActivityHeader onTabChange={handleTabChange} />

      {/* Body sẽ cuộn và hiển thị theo giá trị của selectedTab */}
      <ActivityBody value={selectedTab} />
      <View>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Activity;
