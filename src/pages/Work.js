import React from "react";
import "./work.css";
import { Container, Row } from "react-bootstrap";
import Navigation from "../components/Nav/Nav";
import Footer from "../components/Nav/Foot";

// project images
import WorkCard from "../components/Card/WorkCard";
import moodring from "../assets/Projects/mood-ring.png";
import crypto from "../assets/Projects/crypto.png";
import musicSpider from "../assets/Projects/music-spider.png";
import burgerWorks from "../assets/Projects/burgerWorks.png";
import googleBooks from "../assets/Projects/google-books.png";
import employeeDirectory from "../assets/Projects/employeeDirectory.png";

function Work() {

  return (
    <div>
      <Navigation />
      <Container className="pageContainer">
        <Row className="cardContainer">
          <WorkCard
            screenshot={moodring}
            title="Moodring"
            content="Uses facial recognition AI to capture the user's mood and provide content to 'boost' or 'remedy' that mood."
            tech="MERN, JavaScript, Facial Recognition AI, React-Google-Login"
            githubLink="https://github.com/haywah27/mood-ring"
            liveWebpage="https://moody-ring.herokuapp.com/"
          />
          <WorkCard
            screenshot={crypto}
            title="Crypto Dashboard"
            content="Empowers investors to explore the prices of different crypto currency without having to sign up for an exchange."
            tech="JavaScript, jQuery, Express, MySQL, Handlebars, Passport"
            githubLink="https://github.com/team-crypto-currency/crypto-investment-tracker"
            liveWebpage="https://crypto-investment-tracker.herokuapp.com/"
          />
          <WorkCard
            screenshot={musicSpider}
            title="Music Spider"
            content="Search lyrics to know the name of a song, artist, lyrics and similar artists. Uses Shazam API and TasteDive API."
            tech="JavaScript, Ajax, HTML, CSS, jQuery"
            githubLink="https://github.com/haywah27/Music-Spider"
            liveWebpage="https://haywah27.github.io/Music-Spider/"
          />
          <WorkCard
            screenshot={googleBooks}
            title="Book Search Tool"
            content="A user is able to search, save and delete books by utilizing a Google Books API and MongoDB."
            tech="MERN, JavaScript, AXIOS, Bootstrap"
            githubLink="https://github.com/haywah27/google-books-search"
            liveWebpage="https://surfing-book-search.herokuapp.com/"
          />
          <WorkCard
            screenshot={employeeDirectory}
            title="Employee Directory"
            content="View and sort non-sensitive data about employees."
            tech="React, JavaScript, Bootstrap"
            githubLink="https://github.com/haywah27/employee-directory"
            liveWebpage="https://haywah27.github.io/employee-directory/"
          />
          <WorkCard
            screenshot={burgerWorks}
            title="BurgerWorks"
            content="Allows a user to keep track of burgers they would like to try. A bucket list for burgers."
            tech="JavaScript, Express, Node, SQL"
            githubLink="https://github.com/haywah27/BurgerWorks"
            liveWebpage="https://obscure-beyond-92726.herokuapp.com/"
          />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Work;
