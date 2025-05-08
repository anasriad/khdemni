import { BrowserRouter, Routes, Route } from "react-router-dom"
import Providers from "./pages/Providers"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Login from "./pages/Login"
import Tutorials from "./pages/tutorials"
import AboutUs from "./pages/aboutus"
import UserPage from "./pages/UserPage"
import Register from "./pages/Register"

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
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/ProfilePage" element={<UserPage />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
