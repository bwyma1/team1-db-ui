"use strict";
var sql = require("../connection.js");

var Comment = function(user)
{
    this.CommentID = Comment.CommentID;
    this.OwnerEmail = Comment.OwnerEmail;
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

// app.route("/comments/:CommentID").get(userController.get_comment_id);
exports.get_comment_id = function(req, res)
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
              response: "Successfully found replies for review " + req.params.CommentID,
              count: Object.keys(sqlRes).length,
              info: sqlRes,
            });
          }
        }
      }
    );
  }
}

// app.route("/comments/:CommentID").put(userController.update_comment);

exports.update_comment = function(req, res)
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
      "UPDATE `Comments` SET ? WHERE CommentID = ?;",
      [req.body, req.params.CommentID],
      function(sqlErr, sqlRes)
      {
        if (sql.isSuccessfulQuery(sqlErr, res))
        {
          if (sqlRes.affectedRows <= 0)
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
              response: "Successfully updated replies for review " + req.params.CommentID,
              count: Object.keys(sqlRes).length,
              info: sqlRes,
            });
          }
        }
      }
    );
  }
}

// app.route("/comments/").post(userController.create_comment);

exports.create_comment = function(req, res)
{
  if (!("AuctionID" in req.body))
  {
    res.status(400).send(
    {
      success: false,
      response: "Missing required field: `AuctionID`",
    });
  }
  else if (!("OwnerEmail" in req.body))
  {
    res.status(400).send(
    {
      success: false,
      response: "Missing required field: `OwnerEmail`",
    });
  }
  else if (!("CommentMessage" in req.body))
  {
    res.status(400).send(
    {
      success: false,
      response: "Missing required field: `CommentMessage`",
    });
  }
  else
  {
    sql.connection.query(
      "INSERT INTO `Comments` [OwnerEmail, AuctionID, CommentMessage] VALUES (?, ?, ?);",
      [
        req.body.OwnerEmail,
        req.body.AuctionID,
        req.body.CommentMessage,
      ],
      function(sqlErr, sqlRes)
      {
        if (sql.isSuccessfulQuery(sqlErr, res))
        { 
            res.status(200).send(
            {
              success: false,
              response: "Cannot create comment",
            })
          {
            res.status(200).send(
            {
              success: true,
              response: "Successfully created comment",
              count: Object.keys(sqlRes).length,
              info: sqlRes,
            });
          }
        }
      }
    );
  }
}

// app.route("/comments/:CommentID").delete(userController.delete_comment);

exports.delete_comment = function(req, res)
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
      "DELETE FROM `Comments` WHERE CommentID = ?;",
      req.params.CommentID,
      function(sqlErr, sqlRes)
      {
        if (sql.isSuccessfulQuery(sqlErr, res))
        {
          if (sqlRes.affectedRows <= 0)
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
              response: "Successfully updated replies for review " + req.params.CommentID,
              count: Object.keys(sqlRes).length,
              info: sqlRes,
            });
          }
        }
      }
    );
  }
}

// app.route("/comments/:AuctionID").get(userController.get_comments);

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