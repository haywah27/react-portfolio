import "./nav.css";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav" variant="dark">
      <Navbar.Brand href="/react-portfolio/" className="navbar-header">
        Hayley Wahlroos
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" bg="dark" variant="dark">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link className="navbar-link" href="/react-portfolio/">
            About
          </Nav.Link>
          <Nav.Link className="navbar-link" href="/react-portfolio/#/work">
            Work
          </Nav.Link>
          <Nav.Link className="navbar-link" href="/react-portfolio/#/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
