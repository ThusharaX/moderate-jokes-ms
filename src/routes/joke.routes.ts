import { Router } from "express";
import {
  getSubmittedJokesController,
  getSubmittedJokeController,
  updateSubmittedJokeController,
  deleteSubmittedJokeController,
  getJokeTypesController,
  approveJokeController,
  rejectJokeController,
} from "../controllers/joke.controller";
import authMiddleware from "../middleware/auth.middleware";

const router = Router();

router.get("/submitted", authMiddleware(), getSubmittedJokesController);
router.get("/submitted/:id", authMiddleware(), getSubmittedJokeController);
router.patch("/submitted/:id", authMiddleware(), updateSubmittedJokeController);
router.delete(
  "/submitted/:id",
  authMiddleware(),
  deleteSubmittedJokeController,
);
router.get("/joke-types", authMiddleware(), getJokeTypesController);
router.post("/approve/:id", authMiddleware(), approveJokeController);
router.delete("/reject/:id", authMiddleware(), rejectJokeController);

export default router;
