import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {

  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    setTheme((prevTheme) => prevTheme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}

function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}

export { ThemeProvider, useTheme }