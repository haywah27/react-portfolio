import React, { useState } from "react";
import "./workCard.css";
import { Card, Button } from "react-bootstrap";


function WorkCard(props) {
  console.log("prop:", props);
  return (
    <Card className="card text-center" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.screenshot} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.content}</Card.Text>
        <Button className="leftButton" onClick={() => window.open(`${props.githubLink}`, "_blank")}>
          Code
        </Button>
        <Button onClick={() => window.open(`${props.liveWebpage}`, "_blank")}>
          Webpage
        </Button>
      </Card.Body>
    </Card>

    // <Card className="card text-center" style={{ width: "18rem" }}>
    //   <Card.Img variant="top" src={moodring} />
    //   <Card.Body>
    //     <Card.Title>{props.title}</Card.Title>
    //     <Card.Text>
    //       Uses facial recognition AI to capture the user's mood and present
    //       content to boost or remedy that mood.
    //     </Card.Text>
    //     <Button
    //       className="leftButton"
    //       onClick={() =>
    //         window.open("https://github.com/haywah27/mood-ring", "_blank")
    //       }
    //     >
    //       Code
    //     </Button>
    //     <Button
    //       onClick={() =>
    //         window.open("https://moody-ring.herokuapp.com/", "_blank")
    //       }
    //     >
    //       Webpage
    //     </Button>
    //   </Card.Body>
    // </Card>
  );
}

export default WorkCard;
