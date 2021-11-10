const mysql = require("mysql");

const connection = mysql.createConnection({
<<<<<<< HEAD
  host: "db",
  password: "password",
=======
  host: "localhost",
  password: "root",
>>>>>>> 2d3d234b518640e8e7f9be1582570defad072ce5
  database: "db",
  user: "user",
});

// open the MySQL connection
connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;
