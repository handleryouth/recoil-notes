import { selector, selectorFamily } from "recoil";
import { darkModeState, resourcesState } from "./atom";
import { DUMMY_URL } from "./const";
import { APIResource, PostStateProps } from "./type";

// This is the selector that will be used to toggle the dark mode
// selector can be used to get and set the value (overwrite) without using hooks and is reusable
export const toggleDarkModeState = selector<boolean>({
  key: "darkModeToggle",
  set: ({ set }, newValue) => {
    // for typescript needs, darkModeState is boolean so we need to pass generic value (boolean) to the selector
    set(darkModeState, newValue);
  },
  get: ({ get }) => {
    return get(darkModeState);
  },
});

export const toggleFetchData = selector({
  key: "toggleFetchData",
  get: async ({ get }): Promise<PostStateProps[]> => {
    const getResources = get(resourcesState);
    const response = await fetch(DUMMY_URL + getResources);
    return response.json();
  },
});

//selector family allows us to pass parameters to the selector by passing it directly to the selector

export const toggleSpecificData = selectorFamily({
  key: "toggleSpecificData",
  get: (id: APIResource) => async (): Promise<PostStateProps> => {
    const response = await fetch(DUMMY_URL + id);
    return response.json();
  },
});
