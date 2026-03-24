
import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Helpus from "./Pages/Helpus";
import FAQs from "./Pages/FAQs";
import About from "./Pages/About";

const App = () => {
  return (
    <div className="relative overflow-x-hidden bg-[#0A365D]">
      <Navbar className="relative z-10" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/helpus" element={<Helpus />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </div>
  );
};

export default App;