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
import PageNotFound from "./pages/PageNotFound";
import PlayerInformation from "./players-pages/PlayerInformation";
import AddPlayer from "./AddPlayer";

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
        <Route path="/:playerID" element={<PlayerInformation />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/add-player*" element={<AddPlayer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
