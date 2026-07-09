import bcrypt from "bcryptjs";

import {
  getProfileRepo,
  updateProfileRepo,
} from "../repositories/user.repository.js";

import User from "../models/user.js";

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

  const user = await User.findById(id);

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(
    currentPassword,
    user.password
  );

  if (!isMatch) {
    throw new Error("Current password is incorrect");
  }

  const hashedPassword = await bcrypt.hash(
    newPassword,
    10
  );

  user.password = hashedPassword;

  await user.save();

  return true;

};