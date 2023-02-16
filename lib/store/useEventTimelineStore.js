import { create } from "zustand";

const timeline = {
  0: {
    type: "technical",
    events: {
      0: [
        {
          id: 0,
          name: "Technical day 1",
          venue: "E-Learning Center",
          date: "4/3/23",
          poster: "/theme.png",
          time: "10:00 AM",
          organizer: "Enigma",
        },
      ],
      1: [
        {
          id: 0,
          name: "Technical day 2",
          venue: "E-Learning Center",
          date: "4/3/23",
          poster: "/theme.png",
          time: "10:00 AM",
          organizer: "Enigma",
        },
      ],
      2: [
        {
          id: 0,
          name: "Technical day 3",
          venue: "E-Learning Center",
          date: "4/3/23",
          poster: "/theme.png",
          time: "10:00 AM",
          organizer: "Enigma",
        },
      ],
    },
  },
  1: {
    type: "cultural",
    events: {
      0: [
        {
          id: 0,
          name: "Cultural day 1",
          venue: "E-Learning Center",
          date: "4/3/23",
          poster: "/theme.png",
          time: "10:00 AM",
          organizer: "Enigma",
        },
      ],
      1: [
        {
          id: 0,
          name: "Cultural day 2",
          venue: "E-Learning Center",
          date: "4/3/23",
          poster: "/theme.png",
          time: "10:00 AM",
          organizer: "Enigma",
        },
      ],
      2: [
        {
          id: 0,
          name: "Cultural day 3",
          venue: "E-Learning Center",
          date: "4/3/23",
          poster: "/theme.png",
          time: "10:00 AM",
          organizer: "Enigma",
        },
      ],
    },
  },
  2: {
    type: "category",
    events: {
      // day 0
      0: [
        {
          id: 0,
          name: "Category day 1",
          venue: "E-Learning Center",
          date: "4/3/23",
          poster: "/theme.png",
          time: "10:00 AM",
          organizer: "Enigma",
        },
      ],
      // day 1
      1: [
        {
          id: 0,
          name: "Category day 2",
          venue: "E-Learning Center",
          date: "4/3/23",
          poster: "/theme.png",
          time: "10:00 AM",
          organizer: "Enigma",
        },
      ],
      // day 2
      2: [
        {
          id: 0,
          name: "Category day 3 1",
          venue: "E-Learning Center",
          date: "4/3/23",
          poster: "/theme.png",
          time: "10:00 AM",
          organizer: "Enigma",
        },
        {
          id: 0,
          name: "Category day 3 2",
          venue: "E-Learning Center",
          date: "4/3/23",
          poster: "/theme.png",
          time: "10:00 AM",
          organizer: "Enigma",
        },
      ],
    },
  },
};

const useEventTimelineStore = create((set, get) => ({
  category: 0,
  setCategory: (n) => set({ category: n, events: timeline[n].events }),
  activeDay: 0,
  setActiveDay: (n) => set({ activeDay: n }),
  events: timeline[0].events,
}));

export default useEventTimelineStore;
