import axios from "axios";

const API_URL = "http://127.0.0.1:5000/auth/login";

const login = (email, password) => {
  return axios.post(API_URL, {email, password})
    .then((response) => {
      // console.log("response: ", response);
      if (response.status == 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  login,
  logout,
  getCurrentUser
};