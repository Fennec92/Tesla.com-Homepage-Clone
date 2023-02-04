import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface SidebarStore {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const useSidebarStore = create<SidebarStore>()(
    devtools((set) => ({
        isOpen: false,
        toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
    }))
);

export default useSidebarStore;
