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

const editDriver = (req, res, next) => {
  const driverId = req.params.id;
  const driverProps = req.body;

  Driver.findByIdAndUpdate({ _id: driverId }, driverProps, {
    useFindAndModify: false,
  })
    .then(() => Driver.findById({ _id: driverId }))
    .then((driver) => res.send(driver))
    .catch(next);
};

module.exports = {
  createDriver,
  greeting,
  editDriver,
};
