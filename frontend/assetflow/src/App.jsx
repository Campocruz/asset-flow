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
import NotFound from './pages/error/NotFound'
import AdminLayout from './layout/AdminLayout'

export default function App() {

  return (
    <>

      <BrowserRouter>
        <ThemeProvider>
          <Routes>

            <Route element={<DefaultLayout />}>
              <Route path='/' element={<HomePage />} />
              <Route path='/dashboard' element={<DashboardPage />} />
            </Route>

            <Route element={<AdminLayout />}>
              <Route path='/admin' element={<HomePage />} />
              <Route path='/admin/building' element={<BuildinPage />} />
              <Route path='/admin/department' element={<DepartmentPage />} />
              <Route path='/admin/machine' element={<MachinePage />} />
            </Route>

            <Route path='*' element={<NotFound />} />

          </Routes>
        </ThemeProvider>
      </BrowserRouter>

    </>
  )
}
