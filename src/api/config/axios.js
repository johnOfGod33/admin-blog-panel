import axios from "axios";

const BASE_URL = "https://personal-blog-api-7cge.onrender.com";

export const basicAxios = axios.create({
  baseURL: BASE_URL,
});

export const privateAxios = axios.create({
  baseURL: BASE_URL,
});
