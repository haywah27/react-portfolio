import React from "react";
import "./workCard.css";
import { Card, Button } from "react-bootstrap";

function WorkCard(props) {
  return (
    <Card className="card text-center" style={{ width: "18rem" }}>
      <Card.Img className="image" variant="top" src={props.screenshot} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.content}</Card.Text>
        <Button
          className="leftButton"
          onClick={() => window.open(`${props.githubLink}`, "_blank")}
        >
          Code
        </Button>
        <Button onClick={() => window.open(`${props.liveWebpage}`, "_blank")}>
          Webpage
        </Button>
      </Card.Body>
    </Card>
  );
}

export default WorkCard;
