import { create } from "zustand";

export const MAX_TRIES = 6;

type GameState = {
  clicks: number[];
  addClick: (elementNumber: number) => void;
  reset: () => void;
};

export const useGameStore = create<GameState>((set) => ({
  clicks: [],

  addClick: (elementNumber) =>
    set((state) => {
      if (state.clicks.at(-1) === elementNumber) {
        return state;
      }

      const clicks = [...state.clicks, elementNumber].slice(-MAX_TRIES);
      console.log("clicks:", clicks);
      return { clicks };
    }),

  reset: () => set({ clicks: [] }),
}));
