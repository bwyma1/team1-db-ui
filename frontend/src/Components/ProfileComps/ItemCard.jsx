import React from "react"
import {useState} from "react"
import "./ItemCard.css";
import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


export default function ItemCard()
{
    return (
      <div class="itemCard">
        <div class="imgContainer">
          <img
            class="content" 
            src="https://via.placeholder.com/150x150"
            alt="image of piece"
            />
            <div class="itemInfoContainer">

              <h1 class="pieceTitle">Title</h1>
              <h2 class ="seller">Seller</h2>
              <h3 class="priceInfo">Price</h3>
              <div class="detailsButton">
               <button class="newPageNavButton">
                <NavLink href="/auctions"> View Auction </NavLink>
                </button>
              </div>

            </div>
          </div> 
      </div>
  );

}
