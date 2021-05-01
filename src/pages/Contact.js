import React from "react";
import "./contact.css";
import { Jumbotron, Container } from "react-bootstrap";
import Navigation from "../components/Nav/Nav";
// import ContactForm from "../components/Form/Form";
import MediaCard from "../components/Card/MediaCard";

function Contact() {
  return (
    <div>
      <Navigation />
      <Container>
        <Jumbotron className="jumbo ">
          <Container>
            <MediaCard />
            {/* <ContactForm /> */}
            <Container className="pageFiller"></Container>
          </Container>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default Contact;
