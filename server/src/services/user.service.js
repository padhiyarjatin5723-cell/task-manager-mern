import {
  getProfileRepo,
  updateProfileRepo,
} from "../repositories/user.repository.js";

export const getProfile = async (id) => {
  return await getProfileRepo(id);
};

export const updateProfile = async (
  id,
  body
) => {
  return await updateProfileRepo(
    id,
    body
  );
};