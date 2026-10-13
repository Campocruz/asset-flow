import { useTheme } from "../../context/ThemeContext"
import Navbar from "../navbar/navbar";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <header>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
      </header>
    </>
  )
}