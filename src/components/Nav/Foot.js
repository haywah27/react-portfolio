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
      <Navbar.Collapse
        className="navbarColapse"
        id="responsive-navbar-nav"
        bg="dark"
        variant="dark"
      >
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
          <div className="footLinkSeperator">|</div>
          <Nav.Link
            className="footLink"
            onClick={() => window.open("https://github.com/haywah27", "_blank")}
          >
            GitHub
          </Nav.Link>
          <div className="footLinkSeperator">|</div>
          <Nav.Link
            className="footLink"
            onClick={() =>
              window.open("https://www.linkedin.com/in/wahlroos/", "_blank")
            }
          >
            LinkedIn
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Footer;
