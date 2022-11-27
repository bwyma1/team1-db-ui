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

// app.route("/paintings/").get(paintingController.get_paintings);
Painting.get_paintings = function(result)
{
   sql.query("SELECT * FROM Paintings", function(err, res)
   {
      if(err)
      {
         console.log("error: ", err);
         result(null, err);
      }
      else
      {
         console.log('paintings : ', res);
         result(null, res);
      }
   });
};

// app.route("/paintings/:PaintingID").get(paintingController.get_painting_id);
Painting.get_painting_id = function(PaintingID, result)
{
   sql.query("SELECT * FROM Paintings WHERE PaintingID = ?", PaintingID, function(err, res)
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

// app.route("/paintings/:PaintingID").put(paintingController.update_painting);
Painting.update_painting = function(PaintingID, Painting, result)
{
   sql.query("UPDATE Paintings SET OwnerName = ?, Image = ?, PurchasePrice = ?, DatePurchased = ?, OriginalOwner = ? WHERE PaintingID = ?", [Painting.OwnerName, Painting.Image, Painting.PurchasePrice, Painting.DatePurchased, Painting.OriginalOwner, PaintingID], function(err, res)
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

// app.route("/paintings/").post(paintingController.create_painting);
Painting.create_painting = function(newPainting, result)
{
   sql.query("INSERT INTO Paintings set ?", newPainting, function(err, res)
   {
      if(err)
      {
         console.log("error: ", err);
         result(err, null);
      }
      else
      {
         result(null, res);
      }
   });
};

// app.route("/paintings/:PaintingID").delete(paintingController.delete_painting);
Painting.delete_painting = function(PaintingID, result)
{
   sql.query("DELETE FROM Paintings WHERE PaintingID = ?", PaintingID, function(err, res)
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