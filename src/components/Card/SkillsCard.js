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
            <Card.Title className="skillsTitle">Front End</Card.Title>
            <hr className="titleUnderline"/>
            <Card.Body className="skillsBody">
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>Bulma</li>
                <li>Handlebars</li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="cardCss skillsCard">
            <Card.Title className="skillsTitle">Back End</Card.Title>
            <hr className="titleUnderline"/>
            <Card.Body className="skillsBody">
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>Bulma</li>
                <li>Handlebars</li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="cardCss skillsCard">
            <Card.Title className="skillsTitle">Deployment</Card.Title>
            <hr className="titleUnderline"/>
            <Card.Body className="skillsBody">
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>Bulma</li>
                <li>Handlebars</li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="cardCss skillsCard">
            <Card.Title className="skillsTitle">Random</Card.Title>
            <hr className="titleUnderline"/>
            <Card.Body className="skillsBody">
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>Bulma</li>
                <li>Handlebars</li>
              </ul>
            </Card.Body>
          </Card>
        </Row>
      </Jumbotron>
    </>
  );
}
export default SkillsCard;
