const Driver = require("../models/driver");

const greeting = (req, res) => {
  res.send({ hi: "there" });
};

const createDriver = (req, res, next) => {
  const driverProps = req.body;
  Driver.create(driverProps)
    .then((driver) => res.send(driver))
    .catch(next);
};

module.exports = {
  createDriver,
  greeting,
};
