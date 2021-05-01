import React from "react";
import "./work.css";
import { Container, Row } from "react-bootstrap";
import Navigation from "../components/Nav/Nav";

// project images
import WorkCard from "../components/WorkCard/WorkCard";
import moodring from "../assets/Projects/mood-ring.png";
import crypto from "../assets/Projects/crypto.png";
import musicSpider from "../assets/Projects/music-spider.png";
import burgerWorks from "../assets/Projects/burgerWorks.png";
import weatherDash from "../assets/Projects/weather-dash.png";
import employeeDirectory from "../assets/Projects/employeeDirectory.png";

function Work() {
  return (
    <div>
      <Navigation />
      <Container className="cardContainer">
        <Row>
          <WorkCard
            screenshot={moodring}
            title="Moodring"
            content="Uses facial recognition AI to capture the user's mood and provide content to 'boost' or 'remedy' that mood."
            githubLink="https://github.com/haywah27/mood-ring"
            liveWebpage="https://moody-ring.herokuapp.com/"
          />
          <WorkCard
            screenshot={crypto}
            title="Crypto Dashboard"
            content="Uses facial recognition AI to capture the user's moo"
            githubLink="https://github.com/team-crypto-currency/crypto-investment-tracker"
            liveWebpage="https://crypto-investment-tracker.herokuapp.com/"
          />
          <WorkCard
            screenshot={musicSpider}
            title="Music Spider"
            content=""
            githubLink="https://github.com/haywah27/Music-Spider"
            liveWebpage="https://haywah27.github.io/Music-Spider/"
          />
          <WorkCard
            screenshot={burgerWorks}
            title="BurgerWorks"
            content=""
            githubLink=""
            liveWebpage=""
          />
          <WorkCard
            screenshot={employeeDirectory}
            title="Employee Directory"
            content=""
            githubLink="https://github.com/haywah27/employee-directory"
            liveWebpage="https://haywah27.github.io/employee-directory/"
          />
          <WorkCard
            screenshot={weatherDash}
            title="Weather Dashboard"
            content=""
            githubLink=""
            liveWebpage=""
          />
          
        </Row>
      </Container>
      <Container className="pageFiller"></Container>
    </div>
  );
}

export default Work;
