import axios from "axios";

const api = axios.create({
  baseURL: "https://mavisgate.herokuapp.com/"
});

export default api;
