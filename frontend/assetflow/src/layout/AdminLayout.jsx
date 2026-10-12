import { Outlet } from "react-router"
import Footer from "../components/footer/Footer"
export default function AdminLayout() {

  return (
    <>
      <Headers />

      <main className="min-vh-100">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}