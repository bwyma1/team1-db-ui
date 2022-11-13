"use strict";
var sql = require("../connection.js");

var Bid = function(user)
{
    this.BidID = Bid.BidID;
    this.BidderEmail = Bid.BidderEmail;
    this.AuctionID = Bid.AuctionID;
    this.BidPrice = Bid.BidPrice;
}