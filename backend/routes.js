"use strict"

module.exports = function(app) 
{
  var userController = require("../model/user");

// USER 
app.route("/api/loginUser/").post(userController.login_user);
app.route("/api/getUsers/").get(userController.get_users);
};