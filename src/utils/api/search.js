import api from "./api";

export async function searchMovie(query) {
  const url = "/search/movie";
  const { data } = await api.get(url, {
    params: {
      query,
    },
  });
  return data;
}
