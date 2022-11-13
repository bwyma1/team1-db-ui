"use strict";
var sql = require("../connection.js");

var Painting = function(user)
{
   this.PaintingID = Painting.PaintingID;
   this.OwnerName = Painting.OwnerName;
   this.Image = Painting.Image;
   this.PurchasePrice = Painting.PurchasePrice;
   this.DatePurchased = Painting.DatePurchased;
   this.OriginalOwner = Painting.OriginalOwner;
}