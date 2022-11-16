"use strict";
var sql = require("../connection.js");

var Notification = function(user)
{
    this.NotificationID = Notification.NotificationID;
    this.UserEmail = Notification.UserEmail;
    this.NotificationMessage = Notification.NotificationMessage;
}