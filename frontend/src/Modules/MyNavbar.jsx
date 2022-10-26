import React from "react";
import "./MyNavbar.css";
import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export default function MyNavbar() {
  return (
    <Navbar collapseOnSelect={true} expand="false" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <h2>ArcTion</h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/login">Login</NavLink>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
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
