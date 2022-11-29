import React from "react"
import {useState} from "react"
import "./ItemCard.css";
import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LikeButton from "./LikeButton";


export default function ItemCard({props})
{
    const [title, setTitle]=useState('');
    const [seller, setSeller]=useState(''); 
    const [price, setPrice]=useState('')

    return (
      <div class="itemCard">
        <div class="imgContainer">
          <img
            class="content cardElement itemImage" 
            src="https://via.placeholder.com/150x150"
            alt="image of piece"
            />
            <div class="itemInfoContainer cardElement">

        
                <span>
                     <h1 class="pieceTitle leftFloat cardText">  Title</h1> 
                     <LikeButton/>
                </span>
              <h1 class ="sellerTitle leftFloat cardText">@Seller</h1>
              <h1 class="priceInfo rightFloat cardText">$xxx</h1>
              <div class="detailsButton">
               <button class="newPageNavButton cardElement">
                <NavLink href="/auctions"> View Auction </NavLink>
                </button>
              </div>
              <div> 

              </div>
            </div>
          </div> 
      </div>
  );

}
