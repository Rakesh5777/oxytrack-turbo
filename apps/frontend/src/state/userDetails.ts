import { atom } from "recoil";

export const userDetailsAtom = atom({
  key: "userDetailsAtom",
  default: {
    id: "",
    username: "",
  },
});
