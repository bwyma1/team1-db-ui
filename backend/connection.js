"use strict";
require("dotenv").config();
var mysql = require("mysql");
const{
    log,
    ExpressAPILogMiddleware
} = require("@rama41222/node-logger");

var pool_config = {
    connectionLimit: 10,   
    host: process.env.MYSQL_CLOUD_HOST,
    user: process.env.MYSQL_CLOUD_USER,
    password: process.env.MYSQL_CLOUD_PASS,
    port: process.env.MYSQL_CLOUD_PORT,
    database: process.env.MYSQL_DB,
    typeCast: function  castField(field, useDefaultTypeCasting) {
        if ((field.type === "BIT") && (field.length === 1)) {
            var bytes = field.buffer();
            return (bytes[0] === 1);
        }
        return (useDefaultTypeCasting());
    },
}
    var connection = mysql.createConnection(pool_config);

    const logger = log(
        {
            console: true,
            file: false,
            label: "Artcion-express"
        });

connection.on('connection', function(connection)
{
  logger.info(`Connection ${connection.threadId} acquired`);
});

exports.propertyCheck = function(req, res, propertyNameList)
{
  var success = true;

  propertyNameList.every(function(name)
  {
    if (!(name in req.query))
    {
      res.status(400).json(
      {
        response: "Missing required field: `" + name + "`",
      });

      success = false;
      return false;
    }
    return true;
  });

  return success;
};

exports.isSuccessfulQuery = function(sqlErr, res)
{
  if (sqlErr)
  {
    res.status(400).send(
    {
      success: false,
      response: sqlErr.sqlMessage,
      info: sqlErr,
    });

    return false;
  }

  return true;
};

exports.connection = connection;


