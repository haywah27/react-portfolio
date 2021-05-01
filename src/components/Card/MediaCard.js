import "./mediaCard.css";
import React from "react";
import { Tooltip, OverlayTrigger, Card, Button, Row } from "react-bootstrap";
import Resume from "../../assets/Hayley-Wahlroos.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function MediaCard() {
  const renderResumeTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Resume
    </Tooltip>
  );

  const renderGithubTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Github
    </Tooltip>
  );

  const renderLinkedinTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      LinkedIn
    </Tooltip>
  );

  const renderEmailTooltip = (props) => (
    <Tooltip id="tooltip-bottom" {...props}>
      Email
    </Tooltip>
  );
  return (
    <Card className="mediaCard text-center cardCss">
      <Card.Body>
        <Card.Title className="title">Find Me Here</Card.Title>
        <hr className="mediaHr" />
        <Row className="rowContainer">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 400, hide: 10 }}
            overlay={renderEmailTooltip}
          >
            <Button
              className="icon email"
              size="lg"
              onClick={() =>
                (window.location.href = "mailto:hayleywahlroos@gmail.com")
              }
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x"></FontAwesomeIcon>
            </Button>
          </OverlayTrigger>

          <OverlayTrigger
            placement="bottom"
            delay={{ show: 400, hide: 10 }}
            overlay={renderGithubTooltip}
          >
            <Button
              className="icon github"
              size="lg"
              onClick={() =>
                window.open("https://github.com/haywah27", "_blank")
              }
            >
              <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
            </Button>
          </OverlayTrigger>

          <OverlayTrigger
            placement="bottom"
            delay={{ show: 400, hide: 10 }}
            overlay={renderLinkedinTooltip}
          >
            <Button
              className="icon linkedIn"
              size="lg"
              onClick={() =>
                window.open("https://www.linkedin.com/in/wahlroos/", "_blank")
              }
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x"></FontAwesomeIcon>
            </Button>
          </OverlayTrigger>

          <OverlayTrigger
            placement="bottom"
            delay={{ show: 400, hide: 10 }}
            overlay={renderResumeTooltip}
          >
            <Button
              className="resume"
              size="lg"
              onClick={() => window.open(Resume)}
            >
              <FontAwesomeIcon icon={faFile} size="2x"></FontAwesomeIcon>
            </Button>
          </OverlayTrigger>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default MediaCard;
