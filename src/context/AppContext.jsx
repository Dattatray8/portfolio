import { createContext, useEffect, useState } from "react";

export const context = createContext();

function AppContext({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  const value = {
    theme,
    setTheme,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
}

export default AppContext;
