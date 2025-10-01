import { Routes, Route, Navigate } from 'react-router-dom'
import AuthLogin from './pages/AuthLogin/AuthLogin'
import AuthRegister from './pages/AuthRegister/AuthRegister'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLogin />} />
      <Route path="/register" element={<AuthRegister />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
