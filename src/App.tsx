import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Login } from "./pages/Login"
import AppRoutes from "./routes/App.routes"

import { AuthProvider } from "./contexts/AuthContext"

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<AppRoutes />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
