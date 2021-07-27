import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#/">Bad Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#/CreateAccount/">Create Account</Nav.Link>
            <Nav.Link href="#/Deposit/">Deposit</Nav.Link>
            <Nav.Link href="#/Withdraw/">Withdraw</Nav.Link>
            <Nav.Link href="#/AllData/">AllData</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default NavBar;