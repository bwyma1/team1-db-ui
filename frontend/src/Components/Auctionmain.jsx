import React from "react";
import "./Auctionmain.css"
import "./MyHomepageFooter.css";
import { auction } from "../Models"
import { Badge, Card } from "@mantine/core";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getAuctionbyId } from "../API/Api";

//import getUserById from "../api";

let selected_auction = new auction(
  1,
  "Brock",
  "The art of War",
  "This piece depicts the wonderful art of war ",
  "129.99",
  "https://via.placeholder.com/150x150",
  [
    ["user1", "cool!"],
    ["user2", "Awesome"],
    ["user3", "I love the design"],
  ],
  ["Friendly", "Dark", "Rennaissance"]
);
//const Data = database.find((user) => user.username === uname);

//David Berberian
export default function Auctionmain() {



  

const params = useParams()

const[Auction, setAuction] = useState('');
const[comments, setCommments] = useState([]);

useEffect(() =>{//selected auction to auction
  getAuctionbyId(1).then(x => setAuction(x))
//call get auction by id
//call get comment by id



  
})
  
  return (
    <div className="">
      
      
 <div><h2 id="piecename">{Auction.OwnerName}</h2></div>
 <span id="sellerbox"><Badge color="cyan" variant="light">Seller: {selected_auction.seller}</Badge></span>
 <span id="tag1">{selected_auction.tags.map((tag) => (
                    <Badge color="pink" variant="light">
                      {tag}
                    </Badge>
                  ))} </span>


<span id="forms">
<form id="biddingform">
<h3>Price: {selected_auction.price}</h3>
<label id="label1" for="bid">Bid</label>
<input type="text" id="bid"/>
<button type="submit" id="bidbtn">Bid</button>
</form>
 <span id="description"><h5>Description:</h5>< >{selected_auction.description}</></span>
</span>


<div>
    <img id="picture1" src={selected_auction.imageUrl} alt="image"/>

 
</div>
  
  
    

   
<div id="bottomcontent">

</div>
<br/>
<div id="timer">

</div>



<br/>
<h4>Comments</h4>
<div id="tag2">
{selected_auction.comments.map((comment) => (
                    <Card>
                      <div className="user" style={{ fontWeight: 'bold' }}>Name:  {comment[0]}</div>
    <div className="comment" style={{ marginBottom: '20px' }}>{comment[1]}</div>
   
                      
                    </Card>
                  ))}
</div>

<Card>
<form id="commentarybox">
<label id="label2" for="commentbox">Comment</label>
<textarea id="commentbox"></textarea>
<br/>
<div id="btnline">
  <button type="submit" id="commentbtn" onClick={() => {


  }}>Submit</button>
</div>

</form>
</Card>

     <footer>footer</footer>

    </div>
  );
}

