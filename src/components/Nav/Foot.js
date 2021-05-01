import "./footer.css";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Footer() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="fixed-bottom footer"
      variant="dark"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="navbarColapse" id="responsive-navbar-nav" bg="dark" variant="dark">
        <Nav className="footerMargin">
          <Nav.Link
            className=" footLink"
            onClick={() => {
              navigator.clipboard.writeText("hello from copy!");
              alert("Copied to Clipboard!");
            }}
          >
            HayleyWahlroos@gmail.com
          </Nav.Link>
          <Nav.Link className="footLink" href="https://github.com/haywah27">
            GitHub
          </Nav.Link>
          <Nav.Link
            className="footLink"
            href="https://www.linkedin.com/in/wahlroos/"
          >
            LinkedIn
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Footer;
