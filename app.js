const express = require("express");
const routes = require("./routes/routes");
const app = express();
const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "test") {
  mongoose.connect("mongodb://localhost/muber", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
}

app.use(express.json());

routes(app);
// after going through all routes the middleware would run for error handling
//middleware is used instead of catch() to follow DRY principle
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;
