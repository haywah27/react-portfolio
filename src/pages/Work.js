import React, { useState } from "react";
import "./work.css";
import { Container, Row } from "react-bootstrap";
import Navigation from "../components/Nav/Nav";
import WorkCard from "../components/WorkCard/WorkCard";
import moodring from "../assets/mood-ring.png";

function Work() {
  return (
    <div>
      <Navigation />
      <Container className="cardContainer">
        <Row>
          <WorkCard
            screenshot={moodring}
            title="Moodring"
            content="Uses facial recognition AI to capture the user's mood and provide content to boost or remedy that mood."
            githubLink="https://github.com/haywah27/mood-ring"
            liveWebpage="https://moody-ring.herokuapp.com/"
          />
        </Row>
      </Container>
      <Container className="pageFiller"></Container>
    </div>
  );
}

export default Work;
