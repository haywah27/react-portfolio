import "./footer.css";
import React, { useState, useRef } from "react";
import { Navbar, Nav, Overlay, Tooltip } from "react-bootstrap";

function Footer() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
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
            className="footLink"
            ref={target}
            
            onClick={() => {
              setShow(!show);
              setTimeout( () => { setShow(false); }, 2500);
              navigator.clipboard.writeText("hello from copy!");
            }}
          >
            <Overlay target={target.current} show={show} placement="right" delay={{ show: 400, hide: 10 }}>
              {(props) => (
                <Tooltip id="overlay-example" {...props}>
                  Copied to Clipboard!
                </Tooltip>
              )}
            </Overlay>
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
