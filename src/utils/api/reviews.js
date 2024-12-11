import api from "./api";

export async function getMovieReviews(id) {
  const url = `/movie/${id}/reviews`;
  const { data } = await api.get(url, {
    params: {
      language: "en-US",
    },
  });
  return data;
}
