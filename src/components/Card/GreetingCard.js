import React from "react";
import "../../pages/about.css";
import { Jumbotron, Row, Card } from "react-bootstrap";
import Headshot from "../Headshot/Headshot";

function GreetingCard() {
  return (
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
  );
}

export default GreetingCard;
