import React from 'react';
import Home from "../pages/Home/index";
import About from "../pages/About/index";
import Diaporama from "../pages/Diaporama/index";
import Fiche from "../pages/Fiche/index";
import Error from "../pages/Error/index";
import { Routes, Route } from "react-router-dom";


const Router =  () => {
    return (
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/diaporama" element={<Diaporama />} />
                <Route path="/fiche/:id" element={<Fiche />} />
                <Route path="*" element={<Error />} />
            </Routes>
    );
};

export default Router;