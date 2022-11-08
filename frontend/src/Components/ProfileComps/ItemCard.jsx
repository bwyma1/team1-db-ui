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
            class="content cardElement itemImage" 
            src="https://via.placeholder.com/150x150"
            alt="image of piece"
            />
            <div class="itemInfoContainer cardElement">

              <h1 class="pieceTitle leftFloat cardText">Title</h1>
              <h1 class ="sellerTitle leftFloat cardText">@Seller</h1>
              <h1 class="priceInfo rightFloat cardText">$xxx</h1>
              <div class="detailsButton">
               <button class="newPageNavButton cardElement">
                <NavLink href="/auctions"> View Auction </NavLink>
                </button>
              </div>

            </div>
          </div> 
      </div>
  );

}
