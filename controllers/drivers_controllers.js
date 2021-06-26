const Driver = require("../models/driver");

const greeting = (req, res) => {
  res.send({ hi: "there" });
};

const createDriver = (req, res) => {
  const driverProps = req.body;
  Driver.create(driverProps).then((driver) => res.send(driver));
};

module.exports = {
  createDriver,
  greeting,
};
