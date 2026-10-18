import { Outlet } from "react-router"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { useTheme } from "../context/ThemeContext";

export default function DefaultLayout() {

  const { theme } = useTheme();

  return (
    <>
      <Header />

      <main className={`container min-vh-100 bg-${theme}`} data-bs-theme={theme}>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}