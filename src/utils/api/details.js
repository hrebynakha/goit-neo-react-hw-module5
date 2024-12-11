import api from "./api";

export async function getMovieDetail(id) {
  const url = `/movie/${id}`;
  const { data } = await api.get(url, {
    params: {
      language: "en-US",
    },
  });
  return data;
}
