import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import avatar from "../assets/man.jpg";
import {
  getAllFeedbackBlindBox,
  getAllFeedbackPackage,
} from "../services/FeedbackService";

const ProductFeedbackScreen = ({ route }) => {
  const { productId, type } = route.params;
  const navigation = useNavigation();

  const [feedbackData, setFeedbackData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("highest");

  // Fetch feedback data
  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = [];
        if (type === "BlindBox") {
          data = await getAllFeedbackBlindBox(productId);
        } else if (type === "Package") {
          data = await getAllFeedbackPackage(productId);
        }

        // Convert API data to desired format
        const formattedData = data.map((item) => ({
          id: item.reviewId,
          name: item.name || "Anonymous", // Vì API không trả tên người dùng
          rating: item.rating,
          feedback: item.comment,
          avatar: avatar,
          image: item.imageUrl ? { uri: item.imageUrl } : null,
          date: new Date(item.createAt).toLocaleDateString(),
        }));

        setFeedbackData(formattedData);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId, type]);

  // Function to sort feedback
  const sortFeedback = (sortType) => {
    const sorted = [...feedbackData];
    sorted.sort((a, b) =>
      sortType === "highest" ? b.rating - a.rating : a.rating - b.rating
    );
    setFeedbackData(sorted);
    setFilter(sortType);
  };

  const renderItem = ({ item }) => (
    <View style={styles.feedbackContainer}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.feedbackContent}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.userRating}>
            {item.rating} <FontAwesome5 name="star" style={styles.starIcon} />
          </Text>
        </View>
        <Text style={styles.feedbackDate}>{item.date}</Text>
        <Text style={styles.feedbackText}>{item.feedback}</Text>

        {item.image && (
          <Image source={item.image} style={styles.uploadedImage} />
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <FontAwesome5 name="chevron-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Feedback</Text>
      </View>

      {/* Filter buttons */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filter === "highest" && styles.activeFilter,
          ]}
          onPress={() => sortFeedback("highest")}
        >
          <Text
            style={[
              styles.filterText,
              filter === "highest" && { color: "white" },
            ]}
          >
            Highest
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filter === "lowest" && styles.activeFilter,
          ]}
          onPress={() => sortFeedback("lowest")}
        >
          <Text
            style={[
              styles.filterText,
              filter === "lowest" && { color: "white" },
            ]}
          >
            Lowest
          </Text>
        </TouchableOpacity>
      </View>

      {/* Loading spinner */}
      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={feedbackData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContent}
          ListFooterComponent={<View style={styles.footerSpacer} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingVertical: 40,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#a10000",
  },
  backButton: {
    marginLeft: 20,
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
  },
  filterButton: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#d32f2f",
    marginHorizontal: 8,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.3s ease",
  },
  activeFilter: {
    backgroundColor: "#d32f2f",
    borderColor: "#a10000",
  },
  filterText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#d32f2f",
  },
  feedbackContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
    marginBottom: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  feedbackContent: {
    flex: 1,
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  userRating: {
    fontSize: 16,
    color: "#d32f2f",
  },
  starIcon: {
    color: "#d32f2f",
  },
  feedbackDate: {
    fontSize: 14,
    color: "#888",
    marginBottom: 5,
  },
  feedbackText: {
    fontSize: 16,
    color: "#555",
  },
  uploadedImage: {
    marginTop: 10,
    width: "100%",
    height: 200,
    borderRadius: 10,
    resizeMode: "cover",
  },
  flatListContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  footerSpacer: {
    height: 10,
  },
});

export default ProductFeedbackScreen;
