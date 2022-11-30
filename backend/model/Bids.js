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
    sql.connection.query("SELECT * FROM Bids", function(err, res)
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
exports.get_bid_id = function(req, res)
{
    if (!("BidID" in req.params))
    {
        res.status(400).send(
        {
            success: false,
            response: "Missing required field: `BidID`",
        });
    }
    else {
        sql.connection.query("SELECT * FROM Bids WHERE BidID = ?", req.params.BidID, function(err, res)
        {
            if(err)
            {
                console.log("error: ", err);
                res.status(200).send(
                {
                    success: false,
                    response: "Couldn't find bidID " + req.params.BidID,
                });
            }
            else
            {
                res.status(200).send(
                {
                    success: true,
                    response: "Successfully found bidID " + req.params.BidID,
                    info: sqlRes,
                });
            }
        });
    }
};

// app.route("/bidsauction/:AuctionID").get(bidController.get_bid_id);
exports.get_bids_auction = function(req, res)
{
    if (!("AuctionID" in req.params))
    {
        res.status(400).send(
        {
            success: false,
            response: "Missing required field: `AuctionID`",
        });
    }
    else {
        sql.connection.query("SELECT * FROM Bids WHERE AuctionID = ?;", req.params.AuctionID, function(sqlErr, sqlRes)
        {
            if(sql.isSuccessfulQuery(sqlErr, res))
            {
                console.log("error: ", sqlErr);
                if (sqlRes.length <= 0)
                {
                    res.status(200).send(
                    {
                    success: false,
                    response: "Couldn't find AuctionID " + req.params.AuctionID,
                    });
                }
                else
                {
                    res.status(200).send(
                    {
                    success: true,
                    response: "Successfully found AuctionID " + req.params.AuctionID,
                    info: sqlRes,
                    });
                }
            }
        });
    }
};

// app.route("/bids/:BidID").put(bidController.update_bid);
exports.update_bid = function(BidID, Bid, result)
{
    sql.connection.query("UPDATE Bids SET BidderEmail = ?, AuctionID = ?, BidPrice = ? WHERE BidID = ?;", [Bid.BidderEmail, Bid.AuctionID, Bid.BidPrice, BidID], function(err, res)
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
exports.create_bid = function(req, res)
{
    if (sql.propertyCheck(req, res, ["BidderEmail", "AuctionID", "BidPrice"]))
  {
    sql.connection.query(
      "INSERT INTO `Bids` (`BidderEmail`, `AuctionID`, `BidPrice`) VALUES (?, ?, ?);",
      [
        req.body.BidderEmail, 
        req.body.AuctionID, 
        req.body.BidPrice
      ],
      function(sqlErr, sqlRes)
      {
        if (sql.isSuccessfulQuery(sqlErr, res))
        {
          res.status(200).send(
          {
            success: true,
            response: "Succesfully created bid",
          });
        }
      }
    );
  }
};

// app.route("/bids/:BidID").delete(bidController.delete_bid);
exports.delete_bid = function(BidID, result)
{
    sql.connection.query("DELETE FROM Bids WHERE BidID = ?", BidID, function(err, res)
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
    sql.connection.query("SELECT * FROM Bids WHERE AuctionID = ?", AuctionID, function(err, res)
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

// app.route("/bidsauction/:AuctionID").get(bidController.get_bids_by_auction);
exports.get_bids_by_email = function(AuctionID, result)
{
    sql.connection.query("SELECT * FROM Bids WHERE AuctionID = ?", AuctionID, function(err, res)
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

