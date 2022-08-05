import React, { useState, useEffect, useRef } from "react";
import Footer from "./Footer";
import Navigation2 from "./Navigation2";
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
      <Navigation2
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {/* {WAVESBG()} */}
      <div className="gap1">WBA</div>

      <div className="content">{renderPage()}</div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
