import { create } from "zustand";

interface PlayerStore {
    ids: string[];
    activeID?: string;
    setID: (id: string) => void;
    setIDs: (ids: string[]) => void;
    reset: () => void;
}

const usePlayer = create<PlayerStore>((set) => ({
    ids: [],
    activeID: undefined,
    setID: (id: string) => set({ activeID: id }),
    setIDs: (ids: string[]) => set({ ids: ids }),
    reset: () => set({ ids: [], activeID: undefined})
}));

export default usePlayer;