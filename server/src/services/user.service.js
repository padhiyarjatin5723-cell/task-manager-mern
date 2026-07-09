import bcrypt from "bcryptjs";

import {
  getProfileRepo,
  updateProfileRepo,
  getUserWithPasswordRepo,
  updatePasswordRepo,
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

export const changePassword = async (
  id,
  body
) => {

  const {
    currentPassword,
    newPassword,
  } = body;

  const user =
    await getUserWithPasswordRepo(id);

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch =
    await bcrypt.compare(
      currentPassword,
      user.password
    );

  if (!isMatch) {
    throw new Error(
      "Current password is incorrect"
    );
  }

  const hashedPassword =
    await bcrypt.hash(
      newPassword,
      10
    );

  await updatePasswordRepo(
    id,
    hashedPassword
  );

  return {
    message:
      "Password updated successfully",
  };

};