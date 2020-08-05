import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = ({ links }) => {
  return (
    <Navbar className="side-nav" bg="primary" variant="dark">
      <Navbar.Brand href="#home">BrainDump</Navbar.Brand>
      <Nav className="mr-auto">
        {links.map((link) => (
          <Nav.Link href={`#${link.toLowerCase()}`}>{link}</Nav.Link>
        ))}
      </Nav>
    </Navbar>
  );
};

export default Header;
