const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "db",
  password: "password",
  database: "db",
  user: "user",
});

// open the MySQL connection
connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;
