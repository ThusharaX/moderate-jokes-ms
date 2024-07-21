import { Request, Response } from 'express';
import { loginService } from '../services/auth.service';

const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await loginService(email, password);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export { loginController };