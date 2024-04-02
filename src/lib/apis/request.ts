// import { ILoginData } from "@/features/interface";
import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { IAuthFormData } from "@/features/interface";
import { toast } from "react-toastify";

// Create an instance of axios with baseURL
const api: AxiosInstance = axios.create({
  baseURL: "https://law-app-backend.onrender.com/",
});

// Interceptor to handle request errors
api.interceptors.request.use(
  (config) => {
    // You can modify the request config here (e.g., adding authentication tokens)
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

// Interceptor to handle response errors
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // You can modify the response data here before it's returned
    return response;
  },
  (error: AxiosError) => {
    // Handle response errors here
    return Promise.reject(error);
  }
);

const catchErrors = (error: unknown) => {
  // Handle error response
  if (axios.isAxiosError(error)) {
    if (error.response) {
      // Handle error with response from the server
      const message = error.response.data.detail;
      toast.error(message ? message : error.response.data[0], {
        toastId: "Error",
      });
      return { success: false, message }; // Return both failure status and message
    } else if (error.request) {
      // Handle network-related error (no response received)
      toast.error("Network error. Please check your connection.", {
        toastId: "Error",
      });
      return { success: false, message: "network_error" }; // Return network error
    }
  } else {
    // Handle other types of errors
    console.error("Non-Axios error:", error);
    return { success: false, message: "error" }; // Return other error
  }
};

export const login = async (data: IAuthFormData) => {
  try {
    const response: AxiosResponse = await api.post("/auth/api/login/", data);
    localStorage.setItem("token", response?.data.access);
    localStorage.setItem("refreshToken", response?.data.refresh);
    toast.success("Login Sucessful", { toastId: "Login Success" });
    return { success: true };
  } catch (error) {
    catchErrors(error);
  }
};

export const refreshToken = async () => {
  try {
    const refreshResponse: AxiosResponse = await api.post(
      "auth/api/login/refresh/",
      {
        refresh: localStorage.getItem("refreshToken"),
      }
    );

    // Update the access token in the headers and localStorage
    const newAccessToken = refreshResponse.data.access;
    api.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;
    localStorage.setItem("token", newAccessToken);

    return { success: true };
  } catch (error) {
    // Handle error refreshing token
    console.error("Error refreshing token:", error);
    return { success: false };
  }
};

export const signup = async (data: IAuthFormData) => {
  try {
    const response: AxiosResponse = await api.post("/auth/signup/", data);
    console.log(response);
    toast.success("Registration Successful", { toastId: "reg success" });
    return { success: true };
  } catch (error) {
    catchErrors(error);
  }
};
