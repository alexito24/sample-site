import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" onClick={() => handlePageChange("Home")}>
          My Website
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto justify-content-end flex-grow-1">
            <Nav.Link href="#home" onClick={() => handlePageChange("Home")}>
              Home
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => handlePageChange("Contact")}
            >
              Contact Us
            </Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item
                href="#services"
                onClick={() => handlePageChange("Services")}
              >
                All Services
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#service1">Service1</NavDropdown.Item>
              <NavDropdown.Item href="#service2">Service2</NavDropdown.Item>
              <NavDropdown.Item href="#service3">service3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#faq" onClick={() => handlePageChange("Faq")}>
              FAQ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
