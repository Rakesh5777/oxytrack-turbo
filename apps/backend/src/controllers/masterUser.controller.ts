import jwt from "jsonwebtoken";
import { getMasterUser } from "../services/masterUser.service";
import { Responses, TypedRequest, TypedResponse } from "../types/express";

export const masterSignInHandler = async (req: TypedRequest["masterUserSignIn"], res: TypedResponse<Responses["masterUserSignIn"]>) => {
  const { username, password } = req.body;
  const user = await getMasterUser(username, password);
  if (!user) return res.status(401).json({ message: "Invalid username or password", error: "invalidCredentials" });
  const token = jwt.sign({ ...user, role: "master" }, process.env.JWT_SECRET!);
  return res.json({ token });
};
