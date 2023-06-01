import { create } from 'zustand'

interface LoginState {
  items: any;
  setItems: (name: string) => void;
}

const usestore = create<LoginState>((set) => ({
  items: "",
  setItems: (items) =>
    set((state) => ({
      ...state,
      items
    })),
}));

export default usestore;