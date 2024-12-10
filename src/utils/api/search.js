import api from "./api";

export async function searchImage(query) {
  const url = "/search/movie";
  const { data } = await api.get(url, {
    params: {
      query,
    },
  });
  return data;
}
