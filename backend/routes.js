"use strict"

module.exports = function(app, logger) 
{
  var userController = require("./model/user.js");

// USER 
app.route("/login/").post(userController.login_user);
app.route("/users/").get(userController.get_users);
app.route("/users/:Email").get(userController.get_user);
app.route("/users/").post(userController.create_user);
app.route("/users/:Email").put(userController.update_user);

// AUCTION
app.route("/auctions/").get(userController.get_auctions);
app.route("/auctions/:AuctionID").get(userController.get_auction_id);
app.route("/auctions/:AuctionID").put(userController.update_auction);
app.route("/auctions/").post(userController.create_auction);
app.route("/auctions/:AuctionID").delete(userController.delete_auction);

// COMMENT
app.route("/comments/").get(userController.get_comments);
app.route("/comments/:CommentID").get(userController.get_comment_id);
app.route("/comments/:CommentID").put(userController.update_comment);
app.route("/comments/").post(userController.create_comment);
app.route("/comments/:CommentID").delete(userController.delete_comment);
app.route("/comments/:AuctionID").get(userController.get_comments);
};