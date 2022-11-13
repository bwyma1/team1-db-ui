"use strict"

module.exports = function(app, logger) 
{
  var userController = require("./model/user.js");

// USER 
app.route("/loginUser/").post(userController.login_user);
app.route("/Users/").get(userController.get_users);
};