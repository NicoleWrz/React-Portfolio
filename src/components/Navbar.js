import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Container from 'react-bootstrap/Container';

function Navigation() {
  return (
<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Nicole Wrzosek</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">About</Nav.Link>
      <Nav.Link href="#features">Portfolio</Nav.Link>
      <Nav.Link href="#pricing">Skills</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
)}

export default Navigation;