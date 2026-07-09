import express from "express";

import authMiddleware from "../middlewares/auth.middleware.js";

import {
  createProjectController,
  getProjectsController,
  updateProjectController,
  deleteProjectController,
} from "../controllers/project.controller.js";

const router = express.Router();

router.use(authMiddleware);

router.post(
  "/",
  createProjectController
);

router.get(
  "/",
  getProjectsController
);

router.put(
  "/:id",
  updateProjectController
);

router.delete(
  "/:id",
  deleteProjectController
);

export default router;