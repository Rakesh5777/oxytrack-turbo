import { CustomError } from "../utils/middlewares";
import { getMasterUserById, getMasterUserByUsernamePassword } from "./../scripts/master.script";
import jwt from "jsonwebtoken";

export const getMasterUser = async (username: string, password: string) => {
  const user = await getMasterUserByUsernamePassword(username, password);
  if (!user) throw new CustomError(401, "Invalid username or password");
  const token = jwt.sign({ ...user, role: "master" }, process.env.JWT_SECRET!);
  return { token, id: user.id, username };
};

export const getMasterUserDetailsById = async (id: string) => {
  const user = await getMasterUserById(id);
  if (!user) throw new CustomError(404, "User not found");
  return user;
};
