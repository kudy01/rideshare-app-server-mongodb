const Driver = require("../models/driver");

const greeting = (req, res) => {
  res.send({ hi: "there" });
};

const getNearbyDrivers = (req, res, next) => {
  const { lng = 0, lat = 0 } = req.query;

  Driver.aggregate([
    {
      $geoNear: {
        near: {
          type: "Point",
          coordinates: [parseFloat(lng), parseFloat(lat)],
        },
        spherical: true,
        maxDistance: 200000,
        distanceField: "dist.calculated",
      },
    },
  ])
    .then((drivers) => res.send(drivers))
    .catch(next);
};

const createDriver = (req, res, next) => {
  const driverProps = req.body;
  Driver.create(driverProps)
    .then((driver) => {
      res.send(driver);
    })
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

const deleteDriver = (req, res, next) => {
  const driverId = req.params.id;

  Driver.findByIdAndRemove(
    { _id: driverId },
    {
      useFindAndModify: false,
    }
  )
    .then((driver) => res.status(204).send(driver))
    .catch(next);
};

module.exports = {
  createDriver,
  greeting,
  editDriver,
  deleteDriver,
  getNearbyDrivers,
};
