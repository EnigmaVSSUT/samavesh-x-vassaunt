import { create } from "zustand";

// const enigma = {
//   name: "Enigma",
//   about: "",
//   poc: [
//     {
//       name: "",
//       position: "",
//       contact_no: "",
//     },
//   ],
//   events: [
//     {
//       title: "Nox Code3",
//       about: "About contest",
//       venue: "Elearning Center",
//       time: "9.30AM",
//     },
//   ],
// };

// const c = {
//   enigma: [
//     {
//       title: "Nox Code3",
//       about: "About contest",
//       venue: "Elearning Center",
//       time: "9.30AM",
//     },
//     {
//       title: "Nox Code3",
//       about: "About contest",
//       venue: "Elearning Center",
//       time: "9.30AM",
//     },
//     {
//       title: "Nox Code3",
//       about: "About contest",
//       venue: "Elearning Center",
//       time: "9.30AM",
//     },
//   ],
//   ecell: [
//     {
//       title: "Trading Pro",
//       about: "About contest",
//       venue: "Elearning Center",
//       time: "9.30AM",
//     },
//     {
//       title: "Trading Pro",
//       about: "About contest",
//       venue: "Elearning Center",
//       time: "9.30AM",
//     },
//   ],
// };

const data = {
  enigma: {
    name: "Enigma",
    about: "Coding CLub of VSSUT",
    poc: [
      {
        name: "P1",
        contactNo: 1234757588,
        designation: "lead",
      },
      {
        name: "P2",
        contactNo: 1234757588,
        designation: "lead",
      },
      {
        name: "P3",
        contactNo: 1234757588,
        designation: "lead",
      },
    ],
    events: [
      {
        title: "Nox Code3",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Nox Code3",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Nox Code3",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
    ],
  },
  ecell: {
    name: "E-Cell",
    about: "Entrepreneurship Cell of VSSUT",
    poc: [
      {
        name: "P1",
        contactNo: 1234757588,
        designation: "lead",
      },
      {
        name: "P2",
        contactNo: 1234757588,
        designation: "lead",
      },
      {
        name: "P3",
        contactNo: 1234757588,
        designation: "lead",
      },
    ],
    events: [
      {
        title: "Trading Pro",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Trading Pro",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Trading Pro",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
    ],
  },
};

const useClubEvents = create((set, get) => ({
  events: [],
  getClubEvents: (club) => {
    // TODO: fetch events from backend
    set({
      events: data[club],
    });
  },
}));

export default useClubEvents;
