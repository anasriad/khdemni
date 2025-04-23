import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/login";
import Tutorials from "./pages/tutorials";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tutorials" element={<Tutorials />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
