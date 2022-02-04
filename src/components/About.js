import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Avatar from "../images/emote.png";

export default function About() {
  return (
      <Container className="about-container">
        <Row>
          <Col lg={true} className="about-img text-center">
            <img
              src={Avatar}
              className="emote"
              alt="Emote"
              width="450"
              height="450"
            ></img>
          </Col>
          <Col lg={true} className="bio">
            <div>
              <h1>Hi, I'm Nicole.</h1>
              <h1>I love building creative and engaging websites.</h1>
              <p>
                I'm a passionate Full Stack Web Developer with experience
                building web applications with JavaScript, React, Express, HTML,
                CSS and other technologies and frameworks.
              </p>
              <div className="flex justify-center">
                <a
                  href="./Nicole-Wrzosek-Resume.pdf"
                  target="_blank"
                  className="resumeButton"
                >
                  Resume
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
  );
}
