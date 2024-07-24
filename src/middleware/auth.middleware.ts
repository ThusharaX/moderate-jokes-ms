import { Request, Response, NextFunction } from "express";
import jwt, { TokenExpiredError } from "jsonwebtoken";
import { envs } from "../config/env";

interface DecodedToken {
  id: string;
  email: string;
}

const authMiddleware =
  () => (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.cookies.token;

      const decoded = jwt.verify(
        token,
        envs.JWT_SECRET as string,
      ) as DecodedToken;

      console.log("Authorized as " + decoded.email);

      next();
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        return res.status(401).json({
          success: false,
          message: "Token expired",
        });
      }

      console.error(error);
      res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }
  };

export default authMiddleware;
