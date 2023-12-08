import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/admin" element={<h1>Admin Page</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
