import api from "./api";

export async function getMovieCredits(id) {
  const url = `/movie/${id}/credits`;
  const { data } = await api.get(url, {
    params: {
      language: "en-US",
    },
  });
  return data;
}
