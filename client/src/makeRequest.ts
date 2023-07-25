import axios from "axios";

export const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_CLOTHINGSTORE_API_URL,
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_CLOTHINGSTORE_API_TOKEN}`,
  },
});
