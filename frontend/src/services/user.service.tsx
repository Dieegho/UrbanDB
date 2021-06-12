import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://control-inventarios-usurban.herokuapp.com/user";

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