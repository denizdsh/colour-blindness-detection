"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

export const DEFAULT_DARK_THENE = true;

export const ThemeContext = createContext<any>(null);

export function useTheme(): { dark: boolean; toggleTheme: Function } {
  return useContext(ThemeContext);
}

export function ThemeProvider(props: PropsWithChildren) {
  const [darkMode, setDarkMode] = useState<boolean>(DEFAULT_DARK_THENE);

  useEffect(() => {
    const isDarkMode = getIsDarkMode();

    setDarkMode(isDarkMode);
  }, []);

  const toggleTheme = () => {
    setDarkMode((dm) => {
      const newDM = !dm;

      localStorage.setItem("theme", newDM ? "dark" : "light");

      return newDM;
    });
  };

  return (
    <ThemeContext.Provider value={{ dark: darkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

function getIsDarkMode(): boolean {
  const persistedPreference = window.localStorage.getItem("theme");

  if (persistedPreference) {
    console.log("localStorage read");
    return persistedPreference === "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}
