import React from "react";
import "./Auctionmain.css"
import "./MyHomepageFooter.css";
import { auction } from "../Models"
import { Badge } from "@mantine/core";
import { useParams } from "react-router-dom"
import { useEffect } from "react";
//import getUserById from "../api";

let selected_auction = new auction(
  1,
  "Brock",
  "The art of War",
  "This piece depicts the wonderful art of war",
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


useEffect(() =>{



  
})
  
  return (
    <>



    <h2 id="piecename">{selected_auction.title}</h2>  

    <div>
    <img id="picture1" src={selected_auction.imageUrl} alt="image"/>
    <div id="tag1">{selected_auction.tags.map((tag) => (
                    <Badge color="pink" variant="light">
                      {tag}
                    </Badge>
                  ))} </div>
  <p id="description">{selected_auction.description}</p>
  </div>
<div id="bottomcontent">

</div>
<div id="timer">
<h3 >Timer</h3>
</div>


<form id="biddingform">

<label for="bid">Bid:</label>
<input type="text" id="bid"/>
<button type="submit" id="bidbtn">Bid</button>

</form>

<form id="commentarybox">
<label for="commentbox">Comment</label>
<textarea id="commentbox"></textarea>

</form>


<h4>Comments</h4>
<ul id="tag2">
{selected_auction.comments.map((comment) => (
                    <li>
                      
                      {comment[0]}
                    </li>
                  ))}
</ul>
     <footer>footer</footer>

    </>
  );
}

