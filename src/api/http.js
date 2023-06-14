import axios from "axios";

export default axios.create({
  baseURL: "http://43.202.9.237:8080/",
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});
