import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Providers from "./pages/Providers"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/providers" element={<Providers />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
