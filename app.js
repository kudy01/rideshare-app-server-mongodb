const express = require("express");
const routes = require("./routes/routes");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/muber");

app.use(express.json());

routes(app);
// app.post("./api", (req, res) => {});
// app.put("./api", (req, res) => {});
// app.delete("./api", (req, res) => {});

module.exports = app;
