"use strict";
var sql = require("../connection.js");

var Comment = function(user)
{
    this.CommentID = Comment.CommentID;
    this.OwnerEmail = Comment.UserEmail;
    this.AuctionID = Comment.AuctionID;
    this.CommentMessage = Comment.CommentMessage;
}