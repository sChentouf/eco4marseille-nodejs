const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 8080;

//app.use(express.static(path.join(__dirname, "./index.html")));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use("/element", express.static(__dirname + "/element"));

const db = mysql.createConnection({
  database: "db",
  host: "localhost",
  user: "user",
  password: "password",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL!");
});
