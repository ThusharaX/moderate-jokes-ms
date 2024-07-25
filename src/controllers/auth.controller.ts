import { Request, Response } from "express";
import { loginService, registerService } from "../services/auth.service";

const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await loginService(email, password);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600000,
    });
    res.status(200).json({ message: "Logged in successfully" });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const registerController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const newUser = await registerService(email, password);
    res
      .status(201)
      .json({ message: "User created successfully", data: newUser });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const logoutController = async (req: Request, res: Response) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};

export { loginController, registerController, logoutController };
