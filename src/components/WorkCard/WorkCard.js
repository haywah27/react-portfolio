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
        <Card className="workCard text-center" onClick={handleClick}>
          <Card.Img className="image" variant="top" src={props.screenshot} />
          <Card.Body>
            <Card.Title>
              <Button className="frontsideTitle">
                {props.title}
              </Button>
            </Card.Title>
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

        <Card className="workCard text-center" onClick={handleClick}>
          <Card.Body>
            <Card.Text className="description">
              <Card.Title className="backsideTitle"> 
                {props.title}
              </Card.Title>
              <hr className="topHr"/>
              {props.content}
              <hr className="bottomHr"/>
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
