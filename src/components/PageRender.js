import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import BIRDS from "vanta/dist/vanta.birds.min";
import NET from "vanta/dist/vanta.net.min";

import Home from "./pages/Home";
import Faq from "./pages/Faq";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

export default function PageRender() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Faq") {
      return <Faq />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Services") {
      return <Services />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);
  const MyComponent = (props) => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(
          NET({
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 500.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
          })
        );
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }, [vantaEffect]);
    return (
      <div className="whiteText" ref={myRef}>
        We can always meet your needs and our prices vary based on your needs
        and budget
      </div>
    );
  };
  return (
    <div className="parent">
      <Header />
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />

      {MyComponent()}
      <div className="gap"></div>
      <div className="content">{renderPage()}</div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
