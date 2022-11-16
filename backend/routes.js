"use strict"

module.exports = function(app, logger) 
{
  var userController = require("./model/user.js");

// USER 
app.route("/login/").post(userController.login_user);
app.route("/users/").get(userController.get_users);
app.route("/user/:email").get(userController.get_user);
};