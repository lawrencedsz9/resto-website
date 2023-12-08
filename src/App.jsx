import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AdminPage from "./pages/admin";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AddItem from "./pages/add";
import Chat from "./pages/chat";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center w-full h-full bg-slate-300">
        <Router>
          <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/home" element={<Home />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/add" element={<AddItem />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
