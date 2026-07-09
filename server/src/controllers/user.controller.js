import {
  getProfile,
  updateProfile,
  changePassword,
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

export const changePasswordController = async (
  req,
  res
) => {
  try {

    const result =
      await changePassword(
        req.user.id,
        req.body
      );

    res.json(result);

  } catch (err) {

    res.status(400).json({
      message: err.message,
    });

  }
};