import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AdminPage from "./pages/admin";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AddItem from "./pages/add";
import Chat from "./components/chat";
<<<<<<< HEAD
import ChatBot from "./components/chats";
=======
import Displaycard from "./components/Displaycard";
import Login from "./pages/login";
>>>>>>> 3b37f80e88f302580b4be7896cb60cddc3df90eb

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center items-center">
        <Router>
          <Routes>
            <Route path="/chat" element={<Chat />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminPage />} />
<<<<<<< HEAD
            <Route path="/chats" element={<ChatBot />} />
=======
            <Route path="/add" element={<AddItem />} />
            <Route path="/display" element={<Displaycard />} />
>>>>>>> 3b37f80e88f302580b4be7896cb60cddc3df90eb
          </Routes>
        </Router>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
