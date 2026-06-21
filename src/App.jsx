
import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"
import Dashboard from "./Dashboard"
import ProtectedRoute from "./ProtectedRoute"



function App() {
  

  return (
    <>
     <Routes>
      
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>

        } />
     </Routes>
    </>
  )
}

export default App
