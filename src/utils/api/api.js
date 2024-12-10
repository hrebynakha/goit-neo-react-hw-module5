import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_MOVIE_API_ENDPOINT,
});

api.defaults.headers.common["Authorization"] =
  "Bearer " + import.meta.env.VITE_MOVIE_API_TOKEN;

export default api;
