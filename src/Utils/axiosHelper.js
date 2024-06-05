import axios from "axios";
let baseUrl = `${process.env.REACT_APP_BASE_URL}` || "http://localhost:3002";

export const axiosInstance = axios.create({
  baseURL: `${baseUrl}/api`,
  withCredentials: true,
});
