import { createContext, useEffect, useState } from "react";
export const DarkMode = createContext();

export const DarkModeProvider = ({ children }) => {

  const [darkMode, setDarkMode] = useState(
   JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const toggle = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  
  };

  useEffect(() => {
  
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return(
	<DarkMode.Provider value={{darkMode,toggle}}> {children} </DarkMode.Provider>
  );
};
