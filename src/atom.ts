import { atom } from "recoil";
import { APIResource, PostStateProps } from "./type";

// This is the atom that will hold the data (more like store)
export const postState = atom({
  key: "posts",
  default: [] as PostStateProps[],
});


export const resourcesState = atom({
  key: "resources",
  default: "posts" as APIResource,
});

export const darkModeState = atom({
  key: "darkModeState",
  default: false,
});
