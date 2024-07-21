import bcrypt from "bcrypt";
import { getUserByEmail, createUser } from "../repositories/user.repository";
import jwt from "jsonwebtoken";
import { envs } from "../config/env";

const loginService = async (email: string, password: string) => {
  const user = await getUserByEmail(email);

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    envs.JWT_SECRET as string,
    {
      expiresIn: "1h",
    },
  );

  return token;
};

const registerService = async (email: string, password: string) => {
  const user = await getUserByEmail(email);

  if (user) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await createUser({
    email,
    password: hashedPassword,
  });

  return newUser;
};

export { loginService, registerService };
