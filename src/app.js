import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About";
import Logement from "./pages/Logement";
import NotFound from "./pages/NotFound";
/* Pour la navigation dans l’application layout dans lequel 
on met le reste de l’application via props.children. */

function App() {
    return (
        <>
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
        </>
    );
}

export default App;
