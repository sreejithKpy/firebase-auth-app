import Login from "./Login"
import { Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard"



function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
