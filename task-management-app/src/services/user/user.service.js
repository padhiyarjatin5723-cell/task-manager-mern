import api from "../api";

export const getProfile = async () => {
  return await api.get("/user/profile");
};

export const updateProfile = async (data) => {
  return await api.put(
    "/user/profile",
    data
  );
};
