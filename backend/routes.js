"use strict"

module.exports = function(app, logger) 
{
  var userController = require("./model/user.js");
  var AuctionController = require("./model/PaintingAuctions.js");
  var commentController = require("./model/Comments.js");
  var bidController = require("./model/Bids.js");
  var paintingController = require("./model/Paintings.js");
  var notificationController = require("./model/Notifications.js");
  
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
  app.route("/auctionsowner/:OwnerName").get(AuctionController.get_auctions_email);
  app.route("/auctions/:Title").get(AuctionController.get_auctions_title);

  // COMMENT
  app.route("/comments/").get(commentController.get_comments);
  app.route("/comments/:CommentID").get(commentController.get_comment_id);
  app.route("/comments/:CommentID").put(commentController.update_comment);
  app.route("/comments/").post(commentController.create_comment);
  app.route("/comments/:CommentID").delete(commentController.delete_comment);
  app.route("/commentsauction/:AuctionID").get(commentController.get_comments);
  // BID
  app.route("/bids/").get(bidController.get_bids);
  app.route("/bids/:BidID").get(bidController.get_bid_id);
  app.route("/bids/:BidID").put(bidController.update_bid);
  app.route("/bids/").post(bidController.create_bid);
  app.route("/bids/:BidID").delete(bidController.delete_bid);
  app.route("/bidsauction/:AuctionID").get(bidController.get_bids_auction);
  app.route("/bidsowner/:OwnerEmail").get(bidController.get_bids_by_email);
  // PAINTING
  app.route("/paintings/").get(paintingController.get_paintings);
  app.route("/paintings/:PaintingID").get(paintingController.get_painting_id);
  app.route("/paintings/:PaintingID").put(paintingController.update_painting);
  app.route("/paintings/").post(paintingController.create_painting);
  app.route("/paintings/:PaintingID").delete(paintingController.delete_painting);
  // NOTIFICATION
  app.route("/notifications/").get(notificationController.get_notifications);
  app.route("/notifications/:NotificationID").get(notificationController.get_notification_id);
  app.route("/notifications/:NotificationID").put(notificationController.update_notification);
  app.route("/notifications/").post(notificationController.create_notification);
  app.route("/notifications/:NotificationID").delete(notificationController.delete_notification);
  app.route("/notifications/:Email").get(notificationController.get_notifications);
  //SORTING
  app.route("/auctionsPencil").get(AuctionController.get_auctions_pencil);
  app.route("/auctionsPaint").get(AuctionController.get_auctions_paint);
  app.route("/auctionsModern").get(AuctionController.get_auctions_modern);
  app.route("/auctionsAbstract").get(AuctionController.get_auctions_abstract);
  app.route("/auctionsRealism").get(AuctionController.get_auctions_realism);
};




