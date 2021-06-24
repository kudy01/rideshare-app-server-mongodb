const express = require("express");

const app = express();

app.get("/api", (req, res) => {
  res.send({ hi: "there" });
});
// app.post("./api", (req, res) => {});
// app.put("./api", (req, res) => {});
// app.delete("./api", (req, res) => {});

module.exports = app;
