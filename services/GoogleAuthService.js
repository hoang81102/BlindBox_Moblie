import * as Google from "expo-auth-session/providers/google";
import config from "../config/config";
import React, { useState, useEffect } from "react";

export const useGoogleLogin = () => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: config.google.ClientId,
    redirectUri: config.google.RedirectURI,
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      handleGoogleLogin(id_token); // Gọi hàm login sau khi nhận id_token từ Google
    }
    if (response?.type === "error") {
      console.log("Google login error:", response.error); // Debug lỗi
      Alert.alert("Error", "Google Sign-In failed");
    }
  }, [response]);

  const handleGoogleLogin = async (idToken) => {
    try {
      console.log("Google login clicked", idToken);
      const res = await fetch(`${config.api.baseUrl}/api/Auth/google-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: idToken }), // Gửi token lên backend
      });

      const data = await res.json();
      if (data.success) {
        console.log("Login successful", data);
        // Đăng nhập thành công, điều hướng hoặc lưu token
      } else {
        Alert.alert("Login Failed", "Please try again");
      }
    } catch (error) {
      console.error("Google Sign-In failed:", error);
      Alert.alert("Error", "Google Sign-In failed");
    }
  };

  return {
    request,
    promptAsync, // Đảm bảo gọi đúng hàm đăng nhập Google
  };
};
