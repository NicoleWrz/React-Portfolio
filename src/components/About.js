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
              width="400"
              height="400"
            ></img>
          </Col>
          <Col lg={true} className="bio">
            <div>
              <h1>Hi, I'm Nicole.</h1>
              <h3>I ♥ building creative and engaging websites.</h3>
              <p className="description">
                I'm a passionate Web Developer with experience
                building web applications with JavaScript, React, HTML,
                CSS and other technologies and frameworks.
              </p>
              <div className="text-center">
                <a
                  href="https://drive.google.com/file/d/1DTYCca3AqmdCfLkBhbHIVv_aGjKtY9Z0/view?usp=sharing"
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
