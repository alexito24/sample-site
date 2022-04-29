import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import NET from "vanta/dist/vanta.net.min";
import { BIRDSBG, NETBG, HALOBG, CLOUDSBG, WAVESBG } from "./AnimatedBG";

import Home from "./pages/Home";
import Faq from "./pages/Faq";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

export default function PageRender() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return (
        <>
          <Home />;
        </>
      );
    }
    if (currentPage === "Faq") {
      return (
        <>
          <Faq />
        </>
      );
    }
    if (currentPage === "About") {
      return (
        <>
          <About />
        </>
      );
    }
    if (currentPage === "Contact") {
      return (
        <>
          <Contact />
        </>
      );
    }
    if (currentPage === "Services") {
      return (
        <>
          <Services />
        </>
      );
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="parent">
      <Header />
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {/* {WAVESBG()} */}

      <div className="content">{renderPage()}</div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
