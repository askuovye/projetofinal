import { defineStore } from "pinia";
import { authService } from "../services/auth.service";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token") || null,
    user: null,
  }),

  actions: {
    setToken(token, user) {
      console.log("Setting token:", token);
      console.log("Setting user:", user);
      this.token = token;
      this.user = user;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      console.log(
        "Token stored in localStorage:",
        localStorage.getItem("token"),
      );
    },
    clearToken() {
      this.token = null;
      localStorage.removeItem("token");
    },
    async login(email, password) {
      try {
        const response = await authService.login({ email, password });
        this.setToken(response.data.access_token, response.data.user);
        return response.data.user;
      } catch (error) {
        console.error("Login failed:", error);
        console.error("Error details:", error.response?.data);
        throw error;
      }
    },
    async register(name, username, email, password, confirmPassword) {
      try {
        const payload = {
          name,
          username,
          email,
          password,
          password2: confirmPassword,
        };
        console.log("Sending registration payload:", payload);
        const response = await authService.register(payload);
        console.log("Registration response:", response);
        this.setToken(response.data.access_token, response.data.user);
      } catch (error) {
        console.error("Registration failed:", error);
        console.error("Error details:", error.response?.data);
        throw error;
      }
    },
    async logout() {
      try {
        await authService.logout();
        this.clearToken();
      } catch (error) {
        console.error("Logout failed:", error);
      }
    },
    async me() {
      if (!this.token) return;

      try {
        const response = await authService.me();
        this.user = response;
        localStorage.setItem("user", JSON.stringify(response));
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    },
  },
});
