import { MasterUserDetails } from "@oxytrack/api-contract";
import { atom } from "recoil";

export const userDetailsAtom = atom<MasterUserDetails>({
  key: "userDetailsAtom",
  default: {
    id: "",
    username: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    createdAt: new Date(),
  },
});
