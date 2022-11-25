"use strict";
var sql = require("../connection.js");

var Comment = function(user)
{
    this.CommentID = Comment.CommentID;
    this.OwnerEmail = Comment.UserEmail;
    this.AuctionID = Comment.AuctionID;
    this.CommentMessage = Comment.CommentMessage;
}
exports.get_comments = function(req, res)
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
    sql.connection.query(
      "SELECT * FROM `Comments` WHERE AuctionID = ?;",
      req.params.AuctionID,
      function(sqlErr, sqlRes)
      {
        if (sql.isSuccessfulQuery(sqlErr, res))
        {
          if (sqlRes.length <= 0)
          {
            res.status(200).send(
            {
              success: false,
              response: "No replies found for review " + req.params.AuctionID,
            })
          }
          else
          {
            res.status(200).send(
            {
              success: true,
              response: "Successfully found replies for review " + req.params.AuctionID,
              count: Object.keys(sqlRes).length,
              info: sqlRes,
            });
          }
        }
      }
    );
  }
}

exports.create_reply = function(req, res)
{
  if (sql.propertyCheck(req, res, ["OwnerEmail", "CommentMessage"]))
  {
    var newreply = new Reply(req.CommentMessage);
    newreply.OwnerEmail = req.params.OwnerEmail;
    sql.connection.query(
      "INSERT INTO `Comments` SET ?;",
      newreply,
      function(sqlErr, sqlRes)
      {
        if (sql.isSuccessfulQuery(sqlErr, res))
        {
          sql.connection.query(
            "SELECT * FROM `Comments` WHERE `CommentID` = ?;",
            sqlRes.insertId,
            function(subErr, subRes)
            {
              if (sql.isSuccessfulQuery(subErr, res))
              {
                res.status(200).send(
                {
                  success: true,
                  response: "Successfully created review",
                  info: subRes,
                });
              }
            }
          )

        }
      }
    );
  }
};