import React from "react";
import AppContext from "./AppContext";
import { useEffect, useState } from "react";

const AppContextProvider = ({ children }) => {
  useEffect(() => {
    if (localStorage.getItem("token")) setIsAuthenticated(true);
    else setIsAuthenticated(false);
  }, []);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [events, setEvents] = useState([]);
  const [participations, setParticipations] = useState([]);
  return (
    <AppContext.Provider
      value={{ isAuthenticated, events, setIsAuthenticated, setEvents }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
