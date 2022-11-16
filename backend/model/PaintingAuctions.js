"use strict";
var sql = require("../connection.js");

var PaintingAuction = function(user)
{
  this.AuctionID = PaintingAuction.AuctionID;
  this.PaintingID = PaintingAuction.PaintingID;
  this.OwnerName = PaintingAuction.OwnerName;
  this.LeadBid  = PaintingAuction.LeadBid;
  this.Image = PaintingAuction.Image;
  this.StartPrice = PaintingAuction.StartPrice;
  this.DateListed = PaintingAuction.DateListed;
  this.Tags = PaintingAuction.Tags;
  this.EndDate = PaintingAuction.EndDate;
}
exports.get_auction_name = function(req, res)
{
  sql.connection.query(
    "SELECT * FROM `PaintingAuctio s` WHERE `PaintingID` = ?;",
    req.params.painting_id,
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
