import React from "react";
import "../../pages/about.css";
import { Card, Jumbotron, Row } from "react-bootstrap";

function SkillsCard() {
  return (
    <>
      <Jumbotron fluid className="hideBackground">
        <div className="skillsHeader">Skills</div>
        <Row className="dimension">
          <Card className="cardCss skillsCard">
            <Card.Title className="skillsTitle">
              Front End <hr className="titleUnderline" />
            </Card.Title>
            <Card.Body className="skillsBody">
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>Bulma</li>
                <li>JQuery</li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="cardCss skillsCard">
            <Card.Title className="skillsTitle">
              Back End
              <hr className="titleUnderline" />
            </Card.Title>
            <Card.Body className="skillsBody">
              <ul>
                <li>Express</li>
                <li>NodeJS</li>
                <li>Axios/Ajax</li>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="cardCss skillsCard">
            <Card.Title className="skillsTitle">
              Deployment
              <hr className="titleUnderline" />
            </Card.Title>
            <Card.Body className="skillsBody">
              <ul>
                <li>GitHub</li>
                <li>gh-pages</li>
                <li>Heroku</li>
                <li>Netlify</li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="cardCss skillsCard">
            <Card.Title className="skillsTitle">
              Other
              <hr className="titleUnderline" />
            </Card.Title>
            <Card.Body className="skillsBody">
              <ul>
                <li>Git</li>
                <li>Illustrator</li>
                <li>Kanban</li>
                <li>Teamwork</li>
                <li>Adaptability</li>
              </ul>
            </Card.Body>
          </Card>
        </Row>
      </Jumbotron>
    </>
  );
}
export default SkillsCard;
