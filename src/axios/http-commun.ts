import axios from "axios";

export default axios.create({
  baseURL: "https://jina-ml.herokuapp.com",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const axios2 = axios.create({
  baseURL: "https://jinaloanpredi.herokuapp.com/api/ml",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});
