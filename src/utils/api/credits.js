import api from "./api";
import data from "../../data/credits.json";

export async function getMovieCredits(id) {
  const url = `/movie/${id}/credits`;
  console.log("Fetch data ", url);
  //   const { data } = await api.get(url, {
  //     params: {
  //       language: "en-US",
  //     },
  //   });
  return data;
}
