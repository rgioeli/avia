import { create } from "zustand";

interface Results {
  id: string;
  term: string;
}

interface SearchTypes {
  results: Results[] | null;
  setResults: (res: Results[] | null) => void;
}

export const searchStore = create<SearchTypes>((set) => ({
  results: null,
  setResults: (res) => set(() => ({ results: res })),
}));
