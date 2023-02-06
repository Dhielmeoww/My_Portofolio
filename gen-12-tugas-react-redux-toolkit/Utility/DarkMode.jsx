
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider(props) {
    const [theme, setTheme] =useState(localStorage.getItem("theme"))

  const toogleDarkMode = () => { setTheme (theme == "light" ? "dark" : "light")}

  const shareValue = {
    theme, toogleDarkMode
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={shareValue}>
      {props.children}
    </ThemeContext.Provider>
  );
}
