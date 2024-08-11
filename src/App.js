import React from "react";
import 'flowbite';
import Header from "./components/Header";
import Video from "./components/VideoBackground";
import Videom from "./components/VideoBackgroundm";
import Hero from "./components/Hero";
import Carta from "./components/Carta";
import Sticky from "./components/Sticky";
import Calendario from "./components/Calendario";
import { ReactLenis, useLenis } from "lenis/react";
import "./output.css";
import "./style.css";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";  

function AppContent() {
  
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  },[]);
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <ReactLenis root>
      <ScrollToTop />
        <Header id="header" />
        {location.pathname === '/Calendario' ? (
          <Calendario />
        ) : location.pathname === '/Carta' ? (
          <Carta />
        ) : location.pathname === '/' ? (
          <>
            <Video />
            <Videom />
            <Hero />
            <Sticky />
          </>
        ) : null}
        <Footer />
      </ReactLenis>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/leromero">
      <AppContent />
    </BrowserRouter>
  );
}

export default App;