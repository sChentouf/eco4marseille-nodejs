const express = require("express");
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
