import express from "express";

import authMiddleware from "../middlewares/auth.middleware.js";

import {
  getProfileController,
  updateProfileController,
} from "../controllers/user.controller.js";

const router = express.Router();

router.use(authMiddleware);

router.get(
  "/profile",
  getProfileController
);

router.put(
  "/profile",
  updateProfileController
);

export default router;