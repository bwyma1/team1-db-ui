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
  if (!("CommentID" in req.params))
  {
    res.status(400).send(
    {
      success: false,
      response: "Missing required field: `CommentID`",
    });
  }
  else
  {
    sql.connection.query(
      "SELECT * FROM `Comments` WHERE CommentID = ?;",
      req.params.CommentID,
      function(sqlErr, sqlRes)
      {
        if (sql.isSuccessfulQuery(sqlErr, res))
        {
          if (sqlRes.length <= 0)
          {
            res.status(200).send(
            {
              success: false,
              response: "No replies found for review " + req.params.CommentID,
            })
          }
          else
          {
            res.status(200).send(
            {
              success: true,
              response: "Successfully found replies for review " + req.params.id,
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
  if (sql.propertyCheck(req, res, ["user_id", "body"]))
  {
    var newreply = new Reply(req.body);
    newreply.OwnerEmail = req.params.id;
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