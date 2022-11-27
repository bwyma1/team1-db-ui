"use strict";
var sql = require("../connection.js");

var Notification = function(user)
{
    this.NotificationID = Notification.NotificationID;
    this.UserEmail = Notification.UserEmail;
    this.NotificationMessage = Notification.NotificationMessage;
}

// app.route("/notifications/").get(notificationController.get_notifications);
Notification.get_notifications = function(result)
{
    sql.query("SELECT * FROM Notifications", function(err, res)
    {
        if(err)
        {
            console.log("error: ", err);
            result(null, err);
        }
        else
        {
            console.log('notifications : ', res);
            result(null, res);
        }
    });
};

// app.route("/notifications/:NotificationID").get(notificationController.get_notification_id);
Notification.get_notification_id = function(NotificationID, result)
{
    sql.query("SELECT * FROM Notifications WHERE NotificationID = ?", NotificationID, function(err, res)
    {
        if(err)
        {
            console.log("error: ", err);
            result(null, err);
        }
        else
        {
            result(null, res);
        }
    });
};

// app.route("/notifications/:NotificationID").put(notificationController.update_notification);
Notification.update_notification = function(NotificationID, Notification, result)
{
    sql.query("UPDATE Notifications SET UserEmail = ?, NotificationMessage = ? WHERE NotificationID = ?", [Notification.UserEmail, Notification.NotificationMessage, NotificationID], function(err, res)
    {
        if(err)
        {
            console.log("error: ", err);
            result(null, err);
        }
        else
        {
            result(null, res);
        }
    });
};

// app.route("/notifications/").post(notificationController.create_notification);
Notification.create_notification = function(Notification, result)
{
    sql.query("INSERT INTO Notifications SET ?", Notification, function(err, res)
    {
        if(err)
        {
            console.log("error: ", err);
            result(null, err);
        }
        else
        {
            result(null, res);
        }
    });
};

// app.route("/notifications/:NotificationID").delete(notificationController.delete_notification);
Notification.delete_notification = function(NotificationID, result)
{
    sql.query("DELETE FROM Notifications WHERE NotificationID = ?", NotificationID, function(err, res)
    {
        if(err)
        {
            console.log("error: ", err);
            result(null, err);
        }
        else
        {
            result(null, res);
        }
    });
};

// app.route("/notifications/:Email").get(notificationController.get_notifications);
Notification.get_notifications = function(Email, result)
{
    sql.query("SELECT * FROM Notifications WHERE UserEmail = ?", Email, function(err, res)
    {
        if(err)
        {
            console.log("error: ", err);
            result(null, err);
        }
        else
        {
            console.log('notifications : ', res);
            result(null, res);
        }
    });
};