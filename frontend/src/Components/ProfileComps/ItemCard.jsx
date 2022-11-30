import React from "react"
import {useState} from "react"
import "./ItemCard.css";
import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LikeButton from "./LikeButton";


export default function ItemCard(props)
{
  const tags = props.tags; 
    return (
      <div className="card h-100 p-2">
          <img
            className="w-  m-1 col w-auto" 
            src ={props.Image}
            alt="image of piece"
            />
            <div className="col card-body">

        
                <span className="d-flex justify-content-between">
                     <h1 className=" mt-3 font-weight-bold pieceTitle leftFloat cardText"> {props.Title}</h1> 

                     <LikeButton className='align-content-end'/>
                </span>
              <h1 className ="sellerTitle font-3 leftFloat cardText">@{props.OwnerName}</h1>

              <h1 class="priceInfo rightFloat cardText">${props.StartPrice}</h1>
              <br></br>
              <div class="detailsButton">
               <button className=" w-100 p-2 mt-3 cardElement">
                <NavLink href={props.link}> View Auction </NavLink>
                </button>
              </div>
                          
          </div> 
      </div>
  );

}


                 
  

// import React from "react"
// import {useState} from "react"
// import "./ItemCard.css";
// import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import LikeButton from "./LikeButton";


// export default function ItemCard(props)
// {

  
//     return (
//       <div class="itemCard" className='m-3 '>
//         <div class="imgContainer">
//           <img
//             className="content cardElement itemImage" 
//             src ={props.imageUrl}

//             alt="image of piece"
//             />
//             <div class="itemInfoContainer cardElement">

        
//                 <span>
//                      <h1 class=" mt-3 font-weight-bold pieceTitle leftFloat cardText"> {props.title}</h1> 

//                      <LikeButton/>
//                      <br></br>
//                 </span>
//               <h1 className ="sellerTitle leftFloat cardText">@{props.seller}</h1>

//               <h1 class="priceInfo rightFloat cardText">${props.price}</h1>
//               <br></br>
//               <div class="detailsButton">
//                <button class="newPageNavButton cardElement">
//                 <NavLink href={props.link}> View Auction </NavLink>
//                 </button>
//               </div>
//               <div> 

//               </div>
//             </div>
//           </div> 
//       </div>
//   );

// }
