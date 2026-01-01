import { createContext, useEffect, useState } from "react";

export const context = createContext();

function AppContext({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("portfolioMode") || "human";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("portfolioMode", mode);
  }, [mode]);

  const value = {
    theme,
    setTheme,
    mode,
    setMode,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
}

export default AppContext;
