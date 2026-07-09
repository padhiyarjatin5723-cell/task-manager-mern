import User from "../models/user.js";

export const getProfileRepo = async (id) => {
  return await User.findById(id).select("-password");
};

export const updateProfileRepo = async (
  id,
  data
) => {
  return await User.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
    }
  ).select("-password");
};

export const getUserWithPasswordRepo = async (
  id
) => {
  return await User.findById(id);
};

export const updatePasswordRepo = async (
  id,
  password
) => {
  return await User.findByIdAndUpdate(
    id,
    {
      password,
    },
    {
      new: true,
    }
  );
};