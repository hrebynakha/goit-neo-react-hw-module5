import api from "./api";

export async function getMovieTrands() {
  const url = "/trending/movie/day";
  const { data } = await api.get(url, {
    params: {
      language: "en-US",
    },
  });
  return data;
}
