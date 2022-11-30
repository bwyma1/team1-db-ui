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
  this.Pencil = PaintingAuction.Pencil;
  this.Paint = PaintingAuction.Paint;
  this.Modern = PaintingAuction.Modern;
  this.Abstract = PaintingAuction.Abstract;
  this.Realism = PaintingAuction.Realism;
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
    if ("Pencil" in req.body)
    {
      query += "Pencil = ?, ";
      queryData.push(req.body.Pencil);
    }
    if ("Paint" in req.body)
    {
      query += "Paint = ?, ";
      queryData.push(req.body.Paint);
    }
    if ("Modern" in req.body)
    {
      query += "Modern = ?, ";
      queryData.push(req.body.Modern);
    }
    if ("Abstract" in req.body)
    {
      query += "Abstract = ?, ";
      queryData.push(req.body.Abstract);
    }
    if ("Realism" in req.body)
    {
      query += "Realism = ?, ";
      queryData.push(req.body.Realism);
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
  else if (!("Pencil" in req.body)){
    res.status(400).send(
    {
      success: false,
      response: "Missing required field: `Pencil`",
    });
  }
  else if (!("Paint" in req.body)){
    res.status(400).send(
    {
      success: false,
      response: "Missing required field: `Paint`",
    });
  }
  else if (!("Modern" in req.body)){
    res.status(400).send(
    {
      success: false,
      response: "Missing required field: `Modern`",
    });
  }
  else if (!("Abstract" in req.body)){
    res.status(400).send(
    {
      success: false,
      response: "Missing required field: `Abstract`",
    });
  }
  else if (!("Realism" in req.body)){
    res.status(400).send(
    {
      success: false,
      response: "Missing required field: `Realism`",
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
      "INSERT INTO `PaintingAuctions` (`OwnerName`, `Title`, `LeadBid`, `Image`, `StartPrice`, `DateListed`, `Paint`, `Pencil`, `Modern`, `Abstract`, `Realism`, `EndDate`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
      [
        req.body.OwnerName,
        req.body.Title,
        req.body.LeadBid,
        req.body.Image,
        req.body.StartPrice,
        req.body.DateListed,
        req.body.Paint,
        req.body.Pencil,
        req.body.Modern,
        req.body.Abstract,
        req.body.Realism,
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

exports.get_auctions_paint = function(req, res)
{
  sql.connection.query(
    "SELECT * FROM `PaintingAuctions` WHERE `Paint` = 1;",
    null,
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
exports.get_auctions_pencil = function(req, res)
{
  sql.connection.query(
    "SELECT * FROM `PaintingAuctions` WHERE `Pencil` = 1;",
    null,
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
exports.get_auctions_modern = function(req, res)
{
  sql.connection.query(
    "SELECT * FROM `PaintingAuctions` WHERE `Modern` = 1;",
    null,
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
exports.get_auctions_abstract = function(req, res)
{
  sql.connection.query(
    "SELECT * FROM `PaintingAuctions` WHERE `Abstract` = 1;",
    null,
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
exports.get_auctions_realism = function(req, res)
{
  sql.connection.query(
    "SELECT * FROM `PaintingAuctions` WHERE `Realism` = 1;",
    null,
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

exports.get_auctions_email = function(req, res)
{
  if (!("OwnerName" in req.params))
  {
    res.status(400).send(
    {
      success: false,
      response: "Missing required field: `OwnerName`",
    });
  }
  else
  {
    sql.connection.query(
      "SELECT * FROM `PaintingAuctions` WHERE `OwnerName` = \""+
      req.params.OwnerName+"\";",
    function(sqlErr, sqlRes)
    {
      if (sql.isSuccessfulQuery(sqlErr, res))
      {
        if (sqlRes.length <= 0)
        {
          res.status(200).send(
          {
            success: false,
            response: "Couldn't find user " + req.params.Email,
          });
        }
        else {
          res.status(200).send(
          {
            success: true,
            count: Object.keys(sqlRes).length,
            info: sqlRes,
          });
        }
      }
      
    }
  );}
};

//app.route("/auctions/:Title").get(AuctionController.get_auctions_title);

exports.get_auctions_title = function(req, res)
{
  if (!("Title" in req.params))
  {
    res.status(400).send(
    {
      success: false,
      response: "Missing required field: `Title`",
    });
  }
  else
  {
    sql.connection.query(
      "SELECT * FROM `PaintingAuctions` WHERE `Title` = \""+
      req.params.Title+"\";",
    function(sqlErr, sqlRes)
    {
      if (sql.isSuccessfulQuery(sqlErr, res))
      {
        if (sqlRes.length <= 0)
        {
          res.status(200).send(
          {
            success: false,
            response: "Couldn't find user " + req.params.Title,
          });
        }
        else {
          res.status(200).send(
          {
            success: true,
            count: Object.keys(sqlRes).length,
            info: sqlRes,
          });
        }
      }
      
    }
  );}
}