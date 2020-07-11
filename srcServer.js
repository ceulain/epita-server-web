const express = require("express");
const path = require("path");
var open = require("openurl").open;

var port = 3000;
var app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/index.html"));
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
