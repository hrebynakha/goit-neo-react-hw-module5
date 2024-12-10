import api from "./api";
import data from "../../data/search.json";

export async function searchMovie(query) {
  const url = `/search/movie?query=${query}`;
  console.log("Fetch data ", url);
  // const { data } = await api.get(url, {
  //   params: {
  //     query,
  //   },
  // });
  return data;
}
