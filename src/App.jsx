import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Helpus from "./Pages/Helpus";
import FAQs from "./Pages/FAQs";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Certificates from "./Pages/Certificates";

const App = () => {
  return (
    <div className="grid-bg min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/helpus" element={<Helpus />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </div>
  );
};

export default App;