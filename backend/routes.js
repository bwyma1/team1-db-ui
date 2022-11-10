"use strict"

module.exports = function(app, logger) 
{
  var userController = require("./model/user.js");

// USER 
app.route("/api/loginUser/").post(userController.login_user);
app.route("/api/getUsers/").get(userController.get_users);
};