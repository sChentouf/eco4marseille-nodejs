const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  password: "root",
  database: "db",
  user: "root",
});

// open the MySQL connection
connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;
