const Driver = require("../models/driver");

const greeting = (req, res) => {
  res.send({ hi: "there" });
};

const createDriver = (req, res) => {
  const driverProps = req.body;
  Driver.create(driverProps)
    .then((driver) => res.send(driver))
    .catch((err) => res.status(404).json("Error"));
};

module.exports = {
  createDriver,
  greeting,
};
