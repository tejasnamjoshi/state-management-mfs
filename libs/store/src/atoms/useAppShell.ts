import create from 'zustand';
import { persist } from 'zustand/middleware';

type Store = {
  token: string | null;
  setToken: (token: string | null) => void;
};

export const useAppShell = create(
  persist<Store>(
    (set) => ({
      token: null,
      setToken: (token) => set(() => ({ token })),
    }),
    {
      name: 'app-shell',
    }
  )
);
