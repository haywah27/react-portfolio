import React, { useState } from "react";
import "./workCard.css";
import { Card, Button } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";

function WorkCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Card className="workCard text-center">
          <Card.Img
            onClick={handleClick}
            className="image pointerCursor"
            variant="top"
            src={props.screenshot}
          />
          <Card.Body>
            <Card.Title className="frontsideTitle">{props.title}</Card.Title>
            <Button
              className="leftButton linkButton"
              onClick={() => window.open(`${props.githubLink}`, "_blank")}
            >
              Code
            </Button>
            <Button
              className="linkButton"
              onClick={() => window.open(`${props.liveWebpage}`, "_blank")}
            >
              Website
            </Button>
          </Card.Body>
        </Card>

        <Card className="workCard text-center">
          <Card.Body>
            <Card.Text
              className="description pointerCursor"
              onClick={handleClick}
            >
              <Card.Title className="backsideTitle">{props.title}</Card.Title>
              <hr className="topHr" />
              {props.content}
              <hr className="bottomHr" />
            </Card.Text>
            <Button
              className="leftButton linkButton"
              onClick={() => window.open(`${props.githubLink}`, "_blank")}
            >
              Code
            </Button>
            <Button
              className="linkButton"
              onClick={() => window.open(`${props.liveWebpage}`, "_blank")}
            >
              Webpage
            </Button>
          </Card.Body>
        </Card>
      </ReactCardFlip>
    </>
    
  );
}

export default WorkCard;
