import api from "./api";
import data from "../../data/movie.json";

export async function getMovieDetail(id) {
  const url = `/movie/${id}`;
  console.log("Fetch data ", url);
  //   const { data } = await api.get(url, {
  //     params: {
  //       language: "en-US",
  //     },
  //   });
  return data;
}
