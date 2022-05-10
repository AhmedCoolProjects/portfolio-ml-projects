import axios from "axios";

export default axios.create({
  baseURL: "https://jina-ml.herokuapp.com",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});
