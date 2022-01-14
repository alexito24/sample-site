import React from "react";
import Nav from "react-bootstrap/Nav";

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <div className="navbar">
      <ul className="flex-column ">
        <li>
          <a href="#home" onClick={() => handlePageChange("Home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#service" onClick={() => handlePageChange("Services")}>
            Services
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => handlePageChange("About")}>
            about
          </a>
        </li>
        <li>
          <a href="#faq" onClick={() => handlePageChange("Faq")}>
            FAQ
          </a>
        </li>
        <li>
          <a
            href="#Contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "navlink active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
