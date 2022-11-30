import React from "react";
import "./Auctionmain.css";
import "./MyHomepageFooter.css";
import { auction, Comments } from "../Models"
import { Badge, Card, Tooltip, Tabs, Button} from "@mantine/core";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getAuctionbyId, getCommentbyId, updateAuctionbyId } from "../API/Api";


//import getUserById from "../api";


// { <Textarea
// placeholder="Your comment"
// label="Your comment"
// radius="lg"
// size="xl"
// /> }

let selected_auction = new auction(
  1,
  1,
  "Brock",
  "129.99",
  "https://via.placeholder.com/150x150",
  "20.0",
  "9/11/2022",
  ["Friendly", "Dark", "Rennaissance"],
  "9/15/2022",
  "The art of War",
  "This piece depicts the wonderful art of war "

);
let Commentss=[
  new Comments(4, "user2@gmail.com",3,"I love the design"),
  new Comments(1, "user2@gmail.com",1,"I love the design"),
  new Comments(2,"user2@gmail.com",1,"I love the design")
]
  



//const Data = database.find((user) => user.username === uname);

//David Berberian
export default function Auctionmain() {



  

const params = useParams();

const[Auction, setAuction] = useState('');
const[comments, setCommments] = useState([]);

useEffect(() =>{//selected auction to auction
  //getAuctionbyId(params.id).then(x => setAuction(x));
  //getCommentbyId(params.id).then(x => setCommments(x));

  if(Auction.AuctionId == undefined){

setAuction(selected_auction);
  }
  if(comments.UserEmail== undefined){

setCommments(Commentss);
  }
  
}, [])



const addComment = (user, commentary) =>{

  let commentID= comments.length+1;
  let newComments = [];
  newComments.push(...comments)
  //[new Comments(commentID, user, params.id, commentary)];//= comments 

  newComments.push(new Comments(commentID, user, params.id, commentary));
  setCommments(newComments);

}

const ChangeBid = newBid =>{
  let newBidding = Auction;
//if(Auction.LeadBid < newBid){

  newBidding.LeadBid = newBid;
  setAuction(newBidding);
//updateAuctionbyId(params.id, Auction);

//}

  

}

  
  return (
    <div className="">
      
      
 <div><h2 id="piecename">{Auction.Title}</h2></div>
 <span id="sellerbox"><Badge color="cyan" variant="light">Seller: {Auction.OwnerName}</Badge></span>
 <span id="tag1">{(Auction.Tags == undefined ? "" : Auction.Tags.map((tag) => (
                    <Badge color="pink" variant="light">
                      {tag}
                    </Badge>
                  ))
                 )} </span>


<span id="forms">
<form id="biddingform">
<h3>Starting Price: {Auction.StartPrice}</h3>
<h3>Highest Bid: {Auction.LeadBid}</h3>
<label id="label1" for="bid">Bid</label>
<input type="text" id="bid"/>
<Tooltip label="Submit bid">
<button type="button" id="bidbtn" onClick={() =>{
let Bidding = document.getElementById('bid');
ChangeBid(Bidding.value)
Bidding.value = "";

}}>Bid</button>
</Tooltip>
</form>
 <span id="description"><h5>Description:</h5>< >{Auction.Description}</></span>
 <h2>Start Date: {Auction.DateListed}</h2>
 <h2>End Date: {Auction.EndDate}</h2>
</span>
<div>
<Tooltip label={"Painting id " +Auction.PaintingID}>
    <img id="picture1" src={(Auction.Tags == undefined ? selected_auction.Image : Auction.Image)} alt="image"/> 
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
{comments.map((comment) => (
                    <Card>
<Button variant="subtle" color="red" radius="lg" size="xs" compact>
      Report User
    </Button>
                      <div className="user" style={{ fontWeight: 'bold' }}>User:  {comment.UserEmail}</div>
    <div className="comment" style={{ marginBottom: '20px' }}>{comment.CommentMessage}</div>
                   </Card>
                  ))}
</div>

      </Tabs.Panel>

      <Tabs.Panel value="messages" pt="xs">
        Messages tab content




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

     <footer>PieceID:{Auction.PaintingID}</footer>

    </div>
  );
}

