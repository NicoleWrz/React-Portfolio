import React from "react";
import {Nav, Navbar } from 'react-bootstrap'

export default function Navigation(props) {
  return (
    <Navbar className="navbar" variant="dark" expand="md">
      <Navbar.Brand className="name">Nicole Wrzosek</Navbar.Brand>
      <div className="vr"></div>
      <Navbar.Toggle className="link" aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="pages">
          <Nav.Link
            className="page"
            onClick={() => {
              props.setCurrentPage("About");
            }}
          >
            About
          </Nav.Link>
          <Nav.Link
            className="page"
            onClick={() => {
              props.setCurrentPage("Portfolio");
            }}
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            className="page"
            onClick={() => {
              props.setCurrentPage("Skills");
            }}
          >
            Skills
          </Nav.Link>
          <Nav.Link
            className="page"
            onClick={() => {
              props.setCurrentPage("Contact");
            }}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
