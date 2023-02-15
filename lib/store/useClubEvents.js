import { create } from "zustand";

const enigma = {
  name: "Enigma",
  about: "",
  poc: [
    {
      name: "",
      position: "",
      contact_no: "",
    },
  ],
  events: [
    {
      title: "Nox Code3",
      about: "About contest",
      venue: "Elearning Center",
      time: "9.30AM",
    },
  ],
};

const c = {
  enigma: [
    {
      title: "Nox Code3",
      about: "About contest",
      venue: "Elearning Center",
      time: "9.30AM",
    },
    {
      title: "Nox Code3",
      about: "About contest",
      venue: "Elearning Center",
      time: "9.30AM",
    },
    {
      title: "Nox Code3",
      about: "About contest",
      venue: "Elearning Center",
      time: "9.30AM",
    },
  ],
  ecell: [
    {
      title: "Trading Pro",
      about: "About contest",
      venue: "Elearning Center",
      time: "9.30AM",
    },
    {
      title: "Trading Pro",
      about: "About contest",
      venue: "Elearning Center",
      time: "9.30AM",
    },
  ],
};
const useClubEvents = create((set, get) => ({
  events: [],
  getClubEvents: (club) => {
    // TODO: fetch events from backend
    set({
      events: c[club],
    });
  },
}));

export default useClubEvents;
