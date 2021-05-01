import React from "react";
import "../../pages/about.css";
import { Card } from "react-bootstrap";

function AboutCard() {
  return (
    <Card className="cardCss">
      <Card.Body className="aboutBody">
        I graduated from the University of Oregon with a Bachelor of Science in
        Art and Technology. Recently, I have shifted my focus from design to
        full stack development. I love dogs, learning new things and exploring
        the outdoors!
      </Card.Body>
    </Card>
  );
}
export default AboutCard;
