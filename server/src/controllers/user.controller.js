import {
  getProfile,
  updateProfile,
} from "../services/user.service.js";

export const getProfileController = async (
  req,
  res
) => {
  try {

    const user = await getProfile(
      req.user.id
    );

    res.json(user);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};

export const updateProfileController = async (
  req,
  res
) => {
  try {

    const user = await updateProfile(
      req.user.id,
      req.body
    );

    res.json(user);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};