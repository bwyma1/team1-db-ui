import React from "react"
import "./ProfileViewSwitcher.css";
import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


export default function ProfileViewSwitcher()
{
    return (
    <Navbar id="toggler" variant="dark">
        <div id="toggleContainer">
          <button> 
          <NavLink href="/">Selling</NavLink>
          </button>
          <button>
          <NavLink href="/login">Purchased</NavLink>
          </button>
          <button>
          <NavLink href="/auctions">Likes</NavLink>
          </button>
          <button>
          <NavLink href="/auctions">Active Bids</NavLink>
          </button>
        </div>  
    </Navbar>
  );

}
