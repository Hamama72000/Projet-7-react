import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home.js";
import About from "./pages/About";
import Logement from "./pages/Logement";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div style={{
        margin: "auto",
        width: "80%"
      }}>
      <Navbar />
        <Routes>
          {/* Page par default */}
          <Route index element={<Home />} />
          {/* Routage Page */}
          <Route path="/home" element={<Home />} />
          <Route path={`/logement/:id`} element={<Logement />} />
          <Route path="/about" element={<About />} />
          {/* Erreur URL */}
          <Route path="*" element={<NotFound />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </div>
        
      <Footer />
    </>
  );
}

export default App;
