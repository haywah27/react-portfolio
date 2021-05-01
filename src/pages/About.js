import React from "react";
import "./about.css";
import { Jumbotron, Container, Card, Row } from "react-bootstrap";
import Navigation from "../components/Nav/Nav";
import Headshot from "../components/Headshot/Headshot";

function About() {
  return (
    <div>
      <Navigation />

      <Container>
        <Jumbotron className="dimension text-center">
          <Container>
            <Jumbotron className="hideBackground mobileMargin">
              <Row className="alignGreeting">
                <Card className="hideBackground">
                  <Headshot />
                </Card>
                <Card className="hideBackground">
                  <Card.Body className="titleMessage">
                    Hello, my name is Hayley!
                  </Card.Body>
                </Card>
              </Row>
            </Jumbotron>
            <Card className="cardCss">
              <Card.Body>
                I graduated from the University of Oregon with a Bachelor of
                Science Degree in Art and Technology. Recently, I have shifted
                my focus from design to full stack development. I love dogs,
                learning new things and exploring the outdoors!
              </Card.Body>
            </Card>
          </Container>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default About;
