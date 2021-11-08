import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import useContexts from "./../hooks/useContexts.js";
const Header = () => {
  const { authInfo } = useContexts();
  const { user, logout } = authInfo;
  const { email, displayName } = user;

  return (
    <>
      <Navbar bg="primary" variant="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} className="text-white" to="/">
            Garaz
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="text-white" as={NavLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="text-white" as={NavLink} to="/dashboard">
                Dashboard
              </Nav.Link>
              {email ? (
                <>
                  <Nav.Link onClick={logout} className="text-white">
                    Logout as {displayName}
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link className="text-white" as={NavLink} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
