import { create } from "zustand";

const useEventTimelineStore = create((set) => ({
  activeTab: 0,
  setActiveTab: (n) => set({ activeTab: n }),
}));

export default useEventTimelineStore;
