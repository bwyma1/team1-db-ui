"use strict";
var sql = require("../connection.js");

var User = function(user)
{
   this.Email = user.Email;
   this.DisplayName = user.DisplayName;
   this.Bio = user.Bio;
   this.ProfilePic = user.ProfilePic;
   this.Tags = user.Tags;
   this.Password = user.Password;
}
exports.get_users = function(req, res)
{
  sql.connection.query(
    "SELECT * FROM `Users`;",
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
exports.login_user = function(req, res)
{
    if(sql.propertyCheck(req, res, ["Email", "Password"]) || sql.propertyCheck(req, res, ["DisplayName", "Password"]))
    {
        var loginUser = new User(req.body);

    }
    sql.connection.query(
        "SELECT * FROM `Users` WHERE `Email` = ?;",
        loginUser.email,
        function(sqlErr, sqlRes)
        {
          if (sql.isSuccessfulQuery(sqlErr, res))
          {
            if (!Object.keys(sqlRes).length)
            {
              res.status(401).send(
              {
                success: false,
                response: "Email not found",
              });
            }
            else
            {
              if (sqlRes[0].password == loginUser.password)
              {
                res.status(200).send(
                {
                  success: true,
                  response: "Successfully logged in",
                  info: sqlRes,
                });
              }
              else
              {
                res.status(401).send(
                {
                  success: false,
                  response: "Password does not match email",
                });
              }
            }
          }
        }
      );
    };
    exports.create_user = function(req, res)
{
  if (sql.propertyCheck(req, res, ["name", "email", "password"]))
  {
    var newUser = new User(req.body);

    sql.connection.query(
      "INSERT INTO `user` SET ?;",
      newUser,
      function(sqlErr, sqlRes)
      {
        if (sql.isSuccessfulQuery(sqlErr, res))
        {
          sql.connection.query(
            "SELECT * FROM `user` WHERE `id` = ?;",
            sqlRes.insertId,
            function(subErr, subRes)
            {
              if (sql.isSuccessfulQuery(subErr, res))
              {
                res.status(200).send(
                {
                  success: true,
                  response: "Succesfully created user",
                  info: subRes,
                });
              }
            }
          );
        }
      }
    );
  }
};
exports.get_user = function(req, res)
{
  if (!("Email" in req.params))
  {
    res.status(400).send(
    {
      success: false,
      response: "Missing required field: `Email`",
    });
  }
  else
  {
    sql.connection.query(
      "SELECT * FROM `user` WHERE Email = ?;",
      req.params.Email,
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
          else
          {
            res.status(200).send(
            {
              success: true,
              response: "Successfully found user " + req.params.Email,
              info: sqlRes,
            });
          }
        }
      }
    );
  }
}