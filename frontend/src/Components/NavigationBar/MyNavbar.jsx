import React from "react";
import "./MyNavbar.css";
import { Nav, Navbar, NavLink } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export default function MyNavbar(props) {
  return (
    <Navbar collapseOnSelect={true} expand="false" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <h2>ArcTion</h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavLink href="/">Home</NavLink>
          {!props.user ? (
            <NavLink href="/login">Login</NavLink>
          ) : (
            <NavLink href="/profile">Profile</NavLink>
          )}
        </Nav>
        <Nav>
          <NavLink href="/auctions">Auctions</NavLink>
          <NavLink eventKey={2} href="/notifications">
            Notifications
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
