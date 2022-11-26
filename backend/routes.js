"use strict"

module.exports = function(app, logger) 
{
  var userController = require("./model/user.js");
  var AuctionController = require("./model/PaintingAuctions.js");
  var commentController = require("./model/Comments.js");

// USER 
app.route("/login/").post(userController.login_user);
app.route("/users/").get(userController.get_users);
app.route("/users/:Email").get(userController.get_user);
app.route("/users/").post(userController.create_user);
app.route("/users/:Email").put(userController.update_user);
app.route("/users/:Email").delete(userController.delete_user);

// AUCTION
app.route("/auctions/").get(AuctionController.get_auctions);
app.route("/auctions/:AuctionID").get(AuctionController.get_auction_id);
app.route("/auctions/:AuctionID").put(AuctionController.update_auction);
app.route("/auctions/").post(AuctionController.create_auction);
app.route("/auctions/:AuctionID").delete(AuctionController.delete_auction);

// COMMENT
app.route("/comments/").get(commentController.get_comments);
app.route("/comments/:CommentID").get(commentController.get_comment_id);
app.route("/comments/:CommentID").put(commentController.update_comment);
app.route("/comments/").post(commentController.create_comment);
app.route("/comments/:CommentID").delete(commentController.delete_comment);
app.route("/comments/:AuctionID").get(commentController.get_comments);


};