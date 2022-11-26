import React from "react";
import "./Auctionmain.css";
import "./MyHomepageFooter.css";
//import getUserById from "../api";

//const Data = database.find((user) => user.username === uname);

//David Berberian
export default function Auctionmain() {
  return (
    <>
      <h2 id="piecename">Auction title</h2>

      <div>
        <img
          id="picture1"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="image"
        />
        <p id="description">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <div id="bottomcontent">
        <ul id="tag1">
          <li>tags</li>
          <li>tags</li>
          <li>tags</li>
        </ul>
      </div>
      <div id="timer">
        <h3>Timer</h3>
      </div>

      <form id="biddingform">
        <label for="bid">Bid:</label>
        <input type="text" id="bid" />
        <button type="submit" id="bidbtn">
          Bid
        </button>
      </form>

      <form id="commentarybox">
        <label for="commentbox">Comment</label>
        <textarea id="commentbox"></textarea>
      </form>

      <h4>Comments</h4>
      <ul id="tag2">
        <li>comment 1</li>
        <li>tags</li>
        <li>tags</li>
      </ul>
      <footer>footer</footer>
    </>
  );
}
