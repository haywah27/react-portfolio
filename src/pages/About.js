import React from "react";
import "./about.css";
import { Jumbotron, Container } from "react-bootstrap";
import Navigation from "../components/Nav/Nav";
import Footer from "../components/Nav/Foot";
import GreetingCard from "../components/Card/GreetingCard";
import AboutCard from "../components/Card/AboutCard";
import SkillsCard from "../components/Card/SkillsCard";

function About() {
  return (
    <div>
      <Navigation />

      <Container>
        <Jumbotron className="dimension text-center">
          <Container>
            <GreetingCard />
            <AboutCard />
            <SkillsCard />
          </Container>
        </Jumbotron>
      </Container>
      <Footer />
    </div>
  );
}

export default About;
