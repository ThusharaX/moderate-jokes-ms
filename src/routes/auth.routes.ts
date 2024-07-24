import { Router } from "express";
import {
  loginController,
  registerController,
  logoutController,
} from "../controllers/auth.controller";

const router = Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.post("/logout", logoutController);

export default router;
