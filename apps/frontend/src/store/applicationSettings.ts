import { atom } from "recoil";

export const sideNavAtom = atom({
  key: "sideNavAtom",
  default: {
    isDrawerOpen: false,
    sideNavExpand: false,
  },
});
