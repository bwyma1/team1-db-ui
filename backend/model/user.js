"use strict";
var sql = require("../connection.js");

var User = function(user)
{
   this.email = user.email;
   this.DisplayName = user.DisplayName;
   this.BidList = user.BidList;
   this.SellList = user.SellList;
   this.PaintingList = user.PaintingList;
   this.Bio = user.Bio;
   this.ProfilePic = user.ProfilePic;
   this.Tags = user.Tags;
   this.Password = user.Password;
}
exports.get_users = function(req, res)
{
  sql.connection.query(
    "SELECT * FROM `user`;",
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
    if(sql.propertyCheck(req, res, ["email", "Password"]) || sql.propertyCheck(req, res, ["DisplayName", "Password"]))
    {
        var loginUser = new User(req.body);

    }
    sql.connection.query(
        "SELECT * FROM `user` WHERE `email` = ?;",
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