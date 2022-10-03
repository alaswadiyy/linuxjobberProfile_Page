import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Classroom from "./pages/Classroom";
import Home from "./pages/Home";
import Interests from "./pages/Interests";
import Result from "./pages/Result";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/result" element={<Result />} />
        <Route path="/classroom" element={<Classroom />} />
      </Routes>
    </Router>
  );
}

export default App;
