import React from "react";
import "./MyNavbar.css";
import { Nav, Navbar, NavLink } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export default function MyNavbar() {
  return (
    <Navbar
      collapseOnSelect={true}
      expand="false"
      className="navbar-dark"
      style={{
        background: "linear-gradient(#ed6ea0, #ec8c69)", border:'none'
      }}
    >
      <Navbar.Brand href="/">
        <h2>ArcTion</h2>
      </Navbar.Brand>
      <Navbar.Toggle className="me-3" aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavLink href="/">Home</NavLink>
          {!false ? (
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
          <NavLink href="/profiles">Profiles</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
