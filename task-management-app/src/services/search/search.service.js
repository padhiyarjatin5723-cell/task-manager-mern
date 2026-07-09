import api from "../api";

export const globalSearch = async (query) => {
  return await api.get(
    `/search?query=${query}`
  );
};