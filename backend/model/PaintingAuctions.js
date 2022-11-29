"use strict";
var sql = require("../connection.js");

var PaintingAuction = function(user)
{
  this.AuctionID = PaintingAuction.AuctionID;
  this.Title = PaintingAuction.Title;
  this.Description = PaintingAuction.Description;
  this.OwnerName = PaintingAuction.OwnerName;
  this.LeadBid  = PaintingAuction.LeadBid;
  this.Image = PaintingAuction.Image;
  this.StartPrice = PaintingAuction.StartPrice;
  this.DateListed = PaintingAuction.DateListed;
  this.Tags = PaintingAuction.Tags;
  this.EndDate = PaintingAuction.EndDate;
}
exports.get_auction_id = function(req, res)
{
  sql.connection.query(
    "SELECT * FROM `PaintingAuctions` WHERE AuctionID = \""+
    req.params.AuctionID+"\";",
    function(sqlErr, sqlRes)
    {
      if (sql.isSuccessfulQuery(sqlErr, res))
      {
        res.status(200).send(
        {
          success: true,
          count: Object.keys(sqlRes).length,
          info: sqlRes,
        });
      }
    }
  );
};

// app.route("/auctions/").get(userController.get_auctions);

exports.get_auctions = function(req, res)
{
  sql.connection.query(
    "SELECT * FROM `PaintingAuctions`;",
    function(sqlErr, sqlRes)
    {
      if (sql.isSuccessfulQuery(sqlErr, res))
      {
        res.status(200).send(
        {
          success: true,
          count: Object.keys(sqlRes).length,
          info: sqlRes,
        });
      }
    }
  );
};

// app.route("/auctions/:AuctionID").put(userController.update_auction);

exports.update_auction = function(req, res)
{
  if (!("AuctionID" in req.params))
  {
    res.status(400).send(
    {
      success: false,
      response: "Missing required field: `AuctionID`",
    });
  }
  else
  {
    var query = "UPDATE `PaintingAuctions` SET ";
    var queryData = [];
    if ("OwnerName" in req.body)
    {
      query += "OwnerName = ?, ";
      queryData.push(req.body.OwnerName);
    }
    if ("LeadBid" in req.body)
    {
      query += "LeadBid = ?, ";
      queryData.push(req.body.LeadBid);
    }
    if ("Image" in req.body)
    {
      query += "Image = ?, ";
      queryData.push(req.body.Image);
    }
    if ("StartPrice" in req.body)
    {
      query += "StartPrice = ?, ";
      queryData.push(req.body.StartPrice);
    }
    if ("DateListed" in req.body)
    {
      query += "DateListed = ?, ";
      queryData.push(req.body.DateListed);
    }
    if ("Tags" in req.body)
    {
      query += "Tags = ?, ";
      queryData.push(req.body.Tags);
    }
    if ("EndDate" in req.body)
    {
      query += "EndDate = ?, ";
      queryData.push(req.body.EndDate);
    }
    query = query.slice(0, -2);
    query += " WHERE AuctionID = ?;";
    queryData.push(req.params.AuctionID);
    sql.connection.query
    (
      query,
      queryData,
      function(sqlErr, sqlRes)
      {
        if (sql.isSuccessfulQuery(sqlErr, res))
        {
          res.status(200).send(
          {
            success: true,
            response: "Auction updated successfully",
          });
        }
      }
    );
  }
};

// app.route("/auctions/").post(userController.create_auction);

exports.create_auction = function(req, res)
{
  if (!("OwnerName" in req.body))
  {
    res.status(400).send(
    {
      success: false,
      response: "Missing required field: `OwnerName`",
    });
  }
  else if (!("LeadBid" in req.body))
  {
    res.status(400).send(
    {
      success: false,
      response: "Missing required field: `LeadBid`",
    });
  }
  else if (!("Image" in req.body))
  {
    res.status(400).send(
    {
      success: false,
      response: "Missing required field: `Image`",
    });
  }
  else if (!("StartPrice" in req.body))
  {
    res.status(400).send(
    {
      success: false,
      response: "Missing required field: `StartPrice`",
    });
  }
  else if (!("DateListed" in req.body))
  {
    res.status(400).send(
    {
      success: false,
      response: "Missing required field: `DateListed`",
    });
  }
  else if (!("Tags" in req.body))
  {
    res.status(400).send(
    {
      success: false,
      response: "Missing required field: `Tags`",
    });
  }
  else if (!("EndDate" in req.body))
  {
    res.status(400).send(
    {
      success: false,
      response: "Missing required field: `EndDate`",
    });
  }
  else
  {
    sql.connection.query
    (
      "INSERT INTO `PaintingAuctions` (`OwnerName`, `LeadBid`, `Image`, `StartPrice`, `DateListed`, `Tags`, `EndDate`) VALUES (?, ?, ?, ?, ?, ?, ?, ?);",
      [
        req.body.OwnerName,
        req.body.LeadBid,
        req.body.Image,
        req.body.StartPrice,
        req.body.DateListed,
        req.body.Tags,
        req.body.EndDate,
      ],
      function(sqlErr, sqlRes)
      {
        if (sql.isSuccessfulQuery(sqlErr, res))
        {
          res.status(200).send(
          {
            success: true,
            response: "Auction created successfully",
          });
        }
      }
    );
  }
};

// app.route("/auctions/:AuctionID").delete(userController.delete_auction);

exports.delete_auction = function(req, res)
{
  if (!("AuctionID" in req.params))
  {
    res.status(400).send(
    {
      success: false,
      response: "Missing required field: `AuctionID`",
    });
  }
  else
  {
    sql.connection.query
    (
      "DELETE FROM `PaintingAuctions` WHERE AuctionID = ?;",
      [req.params.AuctionID],
      function(sqlErr, sqlRes)
      {
        if (sql.isSuccessfulQuery(sqlErr, res))
        {
          res.status(200).send(
          {
            success: true,
            response: "Auction deleted successfully",
          });
        }
      }
    );
  }
};
