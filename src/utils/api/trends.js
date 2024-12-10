import api from "./api";
import data from "../../data/trends.json";

export async function getMovieTrands() {
  const url = "/trending/movie/day";
  console.log("Fetch data ", url);
  //   const { data } = await api.get(url, {
  //     params: {
  //       language: "en-US",
  //     },
  //   });
  return data;
}
