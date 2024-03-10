import { getMasterUser } from "../services/masterUser.service";
import { Responses, TypedRequest, TypedResponse } from "../types/express";

export const masterSignInHandler = async (req: TypedRequest["masterUserSignIn"], res: TypedResponse<Responses["masterUserSignIn"]>) => {
  const { username, password } = req.body;
  const { token, id } = await getMasterUser(username, password);
  return res.json({ token, id, username });
};
