"use strict";
var sql = require("../connection.js");

var Bid = function(user)
{
    this.BidID = Bid.BidID;
    this.BidderEmail = Bid.BidderEmail;
    this.AuctionID = Bid.AuctionID;
    this.BidPrice = Bid.BidPrice;
}

// app.route("/bids/").get(bidController.get_bids);
exports.get_bids = function(result)
{
    sql.query("SELECT * FROM Bids", function(err, res)
    {
        if(err)
        {
            console.log("error: ", err);
            result(null, err);
        }
        else
        {
            console.log('bids : ', res);
            result(null, res);
        }
    });
};

// app.route("/bids/:BidID").get(bidController.get_bid_id);
exports.get_bid_id = function(BidID, result)
{
    sql.query("SELECT * FROM Bids WHERE BidID = ?", BidID, function(err, res)
    {
        if(err)
        {
            console.log("error: ", err);
            result(null, err);
        }
        else
        {
            result(null, res);
        }
    });
};

// app.route("/bids/:BidID").put(bidController.update_bid);
exports.update_bid = function(BidID, Bid, result)
{
    sql.query("UPDATE Bids SET BidderEmail = ?, AuctionID = ?, BidPrice = ? WHERE BidID = ?", [Bid.BidderEmail, Bid.AuctionID, Bid.BidPrice, BidID], function(err, res)
    {
        if(err)
        {
            console.log("error: ", err);
            result(null, err);
        }
        else
        {
            result(null, res);
        }
    });
};

// app.route("/bids/").post(bidController.create_bid);
exports.create_bid = function(newBid, result)
{
    sql.query("INSERT INTO Bids SET ?", newBid, function(err, res)
    {
        if(err)
        {
            console.log("error: ", err);
            result(err, null);
        }
        else
        {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

// app.route("/bids/:BidID").delete(bidController.delete_bid);
exports.delete_bid = function(BidID, result)
{
    sql.query("DELETE FROM Bids WHERE BidID = ?", BidID, function(err, res)
    {
        if(err)
        {
            console.log("error: ", err);
            result(null, err);
        }
        else
        {
            result(null, res);
        }
    });
};

// app.route("/bids/:AuctionID").get(bidController.get_bids);
exports.get_bids = function(AuctionID, result)
{
    sql.query("SELECT * FROM Bids WHERE AuctionID = ?", AuctionID, function(err, res)
    {
        if(err)
        {
            console.log("error: ", err);
            result(null, err);
        }
        else
        {
            result(null, res);
        }
    });
};