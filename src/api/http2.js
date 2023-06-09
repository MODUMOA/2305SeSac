import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.154.209:80/",
  timeout: 300000,
  headers: {
    "Content-Type": "application/json",
  },
});
