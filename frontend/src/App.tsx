import { BrowserRouter, Routes, Route } from "react-router-dom"
import Providers from "./pages/Providers"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Login from "./pages/Login"
import Tutorials from "./pages/tutorials"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Providers" element={<Providers />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tutorials" element={<Tutorials />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
