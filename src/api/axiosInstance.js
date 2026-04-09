import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.ecampusys.tech",
  headers: {
    "ngrok-skip-browser-warning": "true", // optional (remove bhi kar sakte ho)
  },
});

axiosInstance.interceptors.request.use((config) => {

  const token = localStorage.getItem("token");

  if (token && !config.url.includes("/auth/login")) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;

});

export default axiosInstance;