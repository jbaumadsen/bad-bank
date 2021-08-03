import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import NavLink from './NavLink';

const NavBar = () => {
  const pages =             [
    {
      href:"#/CreateAccount/",
      buttonText:"Create Account",
      tipText:"Go here to create an account!"
    },
    {
      href:"#/Deposit/",
      buttonText:"Deposit",
      tipText:"Go here to make a deposit!"
    },
    {
      href:"#/Withdraw/",
      buttonText:"Withdraw",
      tipText:"Go here to make a withdrawl!"
    },
    {
      href:"#/AllData/",
      buttonText:"All Data",
      tipText:"Go here to see all account data!"
    }

  ]
  return (
    <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#/"><span className="company-name">Bro Kin Trust Bank</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            {/* <NavTooltip href="#/CreateAccount/" buttonText="Create Account" tipText="page to create an account" ></NavTooltip>
            <NavTooltip href="#/Deposit/" buttonText="Deposit" tipText="make deposits" ></NavTooltip>
            <NavTooltip href="#/Withdraw/" buttonText="Withdraw" tipText="make withdrawls" ></NavTooltip>
            <NavTooltip href="#/AllData/" buttonText="All Data" tipText="see all account data" ></NavTooltip> */}
            {pages.map(page => <NavLink key={page.buttonText} href={page.href} buttonText={page.buttonText} tipText={page.tipText} />)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default NavBar;