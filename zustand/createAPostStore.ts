import { create } from "zustand";

interface CreateAPostTypes {
  toggleCreateAPost: boolean;
  setToggleCreateAPost: (toggle: boolean) => void;
}

export const createAPostStore = create<CreateAPostTypes>((set) => ({
  toggleCreateAPost: false,
  setToggleCreateAPost: (toggle) => set(() => ({ toggleCreateAPost: toggle })),
}));
