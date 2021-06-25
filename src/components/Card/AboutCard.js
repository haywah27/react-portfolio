import React from "react";
import "../../pages/about.css";
import { Card } from "react-bootstrap";

function AboutCard() {
  return (
    <Card className="cardCss">
      <Card.Body className="aboutBody">
      I'm a full stack web developer leveraging a design background to build quality user experiences in mobile and web applications. I've recently earned a certificate in full stack development from the University of Oregon, enhancing my skills in responsive web design using JavaScript, React and more. I'm passionate about creating life-enhancing user experiences and collaborating with others to develop meaningful applications. 
      </Card.Body>
    </Card>
  );
}
export default AboutCard;
