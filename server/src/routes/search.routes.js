import express from "express";

import authMiddleware from "../middlewares/auth.middleware.js";

import { globalSearchController } from "../controllers/search.controller.js";

const router = express.Router();

router.use(authMiddleware);

router.get(
  "/",
  globalSearchController
);

export default router;