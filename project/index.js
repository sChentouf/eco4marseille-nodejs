const express = require("express");
const mysql = require("mysql");
const app = express();
const bodyParser = require("body-parser");
//const { fetchInfos } = require("./axios");
const port = 3007;
const cors = require("cors");

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/localities.routes")(app);

//const db = mysql.createConnection({
// database: "db",
// host: "localhost",
// user: "root",
// password: "",
//});

//db.connect(function (err) {
// if (err) throw err;
// console.log("Connecté à la base de données MySQL!");
//});

//app.post("/communaute/:id", (req, res) => {
// console.log(req);
//fetchInfos(req.body)
// .then(() => {
//    res.status(200).json({ message: "okay" });
// })
// .catch(() => {
//  res.status(500).json({ message: "TT marche pas" });
// });
//db.query(
//"SELECT * FROM localities WHERE name='Principaute de Monaco'",
// (err, res) => {
// if (err) {
//  console.log("error: ", err);

// return;
// }

// console.log("localities: ", res);
// }
///);
//});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
