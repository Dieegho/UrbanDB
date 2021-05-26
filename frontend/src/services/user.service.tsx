import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://127.0.0.1:5000/user";

const getUserBoard = () => {
  return axios.get(API_URL + "lector", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getUserBoard,
  getAdminBoard
};