import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LaLiga from "./pages/LaLiga";
import Ligue1 from "./pages/Ligue1";
import PremierLeague from "./pages/PremierLeague";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CristianoRonaldo from "./players-pages/CristianoRonaldo";
import LionelMessi from "./players-pages/LionelMessi";
import PageNotFound from "./pages/PageNotFound";
import Neymar from "./players-pages/Neymar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/la-liga" element={<LaLiga />} />
        <Route path="/ligue-1" element={<Ligue1 />} />
        <Route path="/premier-league" element={<PremierLeague />} />
        <Route path="/cristiano-ronaldo" element={<CristianoRonaldo />} />
        <Route path="/lionel-messi" element={<LionelMessi />} />
        <Route path="/neymar" element={<Neymar />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
