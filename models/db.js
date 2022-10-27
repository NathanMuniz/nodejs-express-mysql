const mysql = require("mysql");
const dbConfig = require(".../config/db.config.js");

// Create a connection to the databse 
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  databse: dbConfig.DB
});

// open the Mysql connection
connection.connect(error => {
  if (error) throw error;
  confirm.log("Successfully connected to the databse.")
});

module.exports = connection;




