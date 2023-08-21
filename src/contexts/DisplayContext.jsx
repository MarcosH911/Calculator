import { createContext, useContext, useRef, useState } from "react";

const DisplayContext = createContext();

export function DisplayProvider({ children }) {
  console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);

  const [display, setDisplay] = useState("0");
  const inputRef = useRef(null);

  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  return (
    <DisplayContext.Provider
      value={{ display, setDisplay, inputRef, isDarkMode, setIsDarkMode }}
    >
      {children}
    </DisplayContext.Provider>
  );
}

export function useDisplay() {
  return useContext(DisplayContext);
}
