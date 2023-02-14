import { create } from "zustand";

const useEventTimelineStore = create((set) => ({
  activeTab: 0,
  setActiveTab: (n) => set({ activeTab: n }),
  typeActiveTab: 0,
  setTypeActiveTab: (n) => set({ typeActiveTab: n }),
}));

export default useEventTimelineStore;
