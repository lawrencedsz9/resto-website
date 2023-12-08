import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AdminPage from "./pages/admin";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full ">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </Router>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
