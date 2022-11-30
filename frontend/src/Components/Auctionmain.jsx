import React from "react";
import "./Auctionmain.css";
import "./MyHomepageFooter.css";
import { auction, Comments, Bids } from "../Models"
import { Badge, Card, Tooltip, Tabs, Button} from "@mantine/core";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getAuctionbyId, getBidsbyAuction, getCommentbyId, postBid, postComment, updateAuctionbyId } from "../API/Api";



let selected_auction = new auction(
  1,
  "Brock",
  "129.99",
  "https://via.placeholder.com/150x150",
  "20.0",
  "9/11/2022",
  "9/15/2022",
  "The art of War",
  "This piece depicts the wonderful art of war ",
  1,
  1,
  1,
  1,
  1

);
let Commentss=[
  new Comments(4, "user2@gmail.com",3,"I love the design"),
  new Comments(1, "user2@gmail.com",1,"I love the design"),
  new Comments(2,"user2@gmail.com",1,"I love the design")
]
  
//David Berberian
export default function Auctionmain() {

const makeTags = (() => {
  let tags = [];
if(Auction.Paint == 1){
tags.push("Paint");

}
if(Auction.Modern == 1){

  tags.push("Modern");
}
 if(Auction.Abstract == 1){

  tags.push("Abstract");
}
 if(Auction.Realism == 1){

  tags.push("Realism");
}
setTags(tags);

});
  

const params = useParams();

const[Auction, setAuction] = useState('');
const[comments, setCommments] = useState([]);
const[tags, setTags] = useState([]);
const[bids, setBids] = useState([]);
const [user] = useState(JSON.parse(window.sessionStorage.getItem("user")));

useEffect(() =>{//selected auction to auction
  getAuctionbyId(params.id).then(x => setAuction(x.data.info[0]));//setAuction(
  getCommentbyId(params.id).then(x => setCommments(x.data.info));
  getBidsbyAuction(params.id).then(x => setBids(x.data.info));//.data.info));
  console.log(bids);
  if(Auction === undefined){

    setAuction(selected_auction);
      }

  makeTags();

if(comments === undefined){
  setCommments([]);
}
  
  

   }, [])



const addComment = (user, commentary) =>{

  
  let newComments = [];
  if(comments !== undefined){
     newComments.push(...comments);
  }
 let thecomment = new Comments( params.id, user, commentary)

  newComments.push(thecomment);
  setCommments(newComments);
  postComment(thecomment);
}



const ChangeBid = newBid =>{
  let newBidding = new Bids( user.Email, params.id, newBid);
  let newAuction = new auction(Auction.Title, Auction.Description, Auction.OwnerName, newBid, Auction.Image, Auction.StartPrice, Auction.DateListed, Auction.EndDate, Auction.Paint, Auction.Pencil, Auction.Modern, Auction.Abstract, Auction.Realism)
console.log(newBidding);
if(newBid > Auction.LeadBid){
  postBid(newBidding);
updateAuctionbyId(params.id, newAuction);
}


  

}

  
  return (
    <div className="">
      
      
 <div><h2 id="piecename">{Auction === undefined ? "" : Auction.Title}</h2></div>
 <span id="sellerbox"><Badge color="cyan" variant="light">Seller: {Auction === undefined ? "" : Auction.OwnerName}</Badge></span>
 
 <span id="tag1">{(tags.map((tag) => (
                    <Badge color="pink" variant="light">
                      {tag}
                    </Badge>
                  ))
                 )} </span>


<span id="forms">
<form id="biddingform">
<h3>Starting Price: {Auction === undefined ? "" : Auction.StartPrice}</h3>
<h3>Highest Bid: {Auction === undefined ? "" : Auction.LeadBid}</h3>
<label id="label1" for="bid">Bid</label>
<input type="text" id="bid"/>
<Tooltip label="Submit bid">
<button type="button" id="bidbtn" onClick={() =>{
let Bidding = document.getElementById('bid');

  ChangeBid(Bidding.value);


Bidding.value = "";

}}>Bid</button>
</Tooltip>
</form>
 <span id="description"><h5>Description:</h5>< >{Auction === undefined ? "" :Auction.Description}</></span>
 <h2>Start Date: {Auction === undefined ? "" :Auction.DateListed}</h2>
 <h2>End Date: {Auction === undefined ? "" :Auction.EndDate}</h2>
</span>
<div>
<Tooltip label={Auction.Description}>
    <img id="picture1" src={(Auction === undefined ? "https://via.placeholder.com/150x150": Auction.Image)} alt="image"/> 
    </Tooltip>
</div>
  
  
    

   
<div id="bottomcontent">

</div>
<br/>


<br/>



<Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" icon="">See what others are saying</Tabs.Tab>
        <Tabs.Tab value="messages" icon="">Current Bidding</Tabs.Tab>
        <Tabs.Tab value="settings" icon="">Comment</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" pt="xs">

      <h4>Comments</h4>
<div id="tag2">
{( comments===undefined ? "" : (comments.map((comment) => (
                    <Card>

                      <div className="user" style={{ fontWeight: 'bold' }}>User:  {comment.OwnerEmail}</div>
    <div className="comment" style={{ marginBottom: '20px' }}>{comment.CommentMessage}</div>
                   </Card>
                  ))))}
</div>

      </Tabs.Panel>

      <Tabs.Panel value="messages" pt="xs">
        
          {( bids===undefined ? "" : (bids.map((bid) => (
    <Card>

      <div className="user" style={{ fontWeight: 'bold' }}>User:  {bid.BidderEmail}</div>
<div className="comment" style={{ marginBottom: '20px' }}>{bid.BidPrice}</div>
   </Card>
  ))))}



      </Tabs.Panel>

 

      <Tabs.Panel value="settings" pt="xs">
      


      <Card className="commentcss">
<form id="commentarybox">
  
<h2 id="label2" >Comment on Auction</h2>

<input name="username" type="text" id="commentusername" placeholder="Email"/>
<textarea name="message" id="commentbox" placeholder="Your Comment here"></textarea>
<br/>
<div id="btnline">
  <button type="button" id="commentbtn" onClick={() => {
    let Username = document.getElementById('commentusername');
    let Message = document.getElementById('commentbox');
    addComment(Username.value, Message.value);
    Username.value = "";
    Message.value = "";
  }}>Submit</button>
</div>

</form>
</Card>



      </Tabs.Panel>
    </Tabs>

     <footer>{Auction === undefined ? "" : Auction.Title}</footer>

    </div>
  );
}

