// Import from React Router
import { BrowserRouter, Routes, Route } from 'react-router'

import { ThemeProvider } from './context/ThemeContext'

// Import Layout page
import DefaultLayout from './layout/DefaultLayout'

// Import web page
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import BuildinPage from './pages/factory/BuildingPage'
import DepartmentPage from './pages/factory/DepartmentPage'
import MachinePage from './pages/factory/MachinePage'

export default function App() {

  return (
    <>

      <BrowserRouter>
        <ThemeProvider>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<HomePage />} />
              <Route path='/dashboard' element={<DashboardPage />} />
              <Route path='/building' element={<BuildinPage />} />
              <Route path='/department' element={<DepartmentPage />} />
              <Route path='/machine' element={<MachinePage />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>

    </>
  )
}
