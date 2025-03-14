import React, { useState, useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";

const Spinner = () => {
  const [spinAnimation, setSpinAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnimation, {
        toValue: 1,
        duration: 1600,
        useNativeDriver: true,
      })
    ).start();
  }, [spinAnimation]);

  // Interpolate the spinner rotation
  const spin = spinAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["45deg", "405deg"], // Spin the object around its center
  });

  return (
    <View style={styles.spinnerContainer}>
      {[...Array(6)].map((_, index) => {
        const rotateValue = (index * 60) % 360; // Rotate the individual divs
        return (
          <Animated.View
            key={index}
            style={[
              styles.spinnerPart,
              {
                transform: [{ rotate: `${rotateValue}deg` }, { rotate: spin }],
              },
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerContainer: {
    width: 70.4,
    height: 70.4,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    transformStyle: "preserve-3d",
  },
  spinnerPart: {
    position: "absolute",
    backgroundColor: "rgba(247, 197, 159, 0.1)", // Transparent with a light color
    borderColor: "rgb(247, 197, 159)", // Border color
    borderWidth: 3.5,
    width: "100%",
    height: "100%",
    borderRadius: 100, // Create a circular shape
  },
});

export default Spinner;
