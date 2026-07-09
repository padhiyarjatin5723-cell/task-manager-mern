import User from "../models/User.js";

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
