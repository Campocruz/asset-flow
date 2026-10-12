// Import from React Router
import { BrowserRouter, Routes, Route } from 'react-router'

// Import Layout page
import DefaultLayout from './layout/DefaultLayout'

// Import web page
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import BuildinPage from './pages/factory/BuildingPage'
import DepartmentPage from './pages/factory/DepartmentPage'

export default function App() {

  return (
    <>

      <BrowserRouter>

        <Routes>

          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/building' element={<BuildinPage />} />
            <Route path='/department' element={<DepartmentPage />} />
          </Route>

        </Routes>

      </BrowserRouter>

    </>
  )
}
