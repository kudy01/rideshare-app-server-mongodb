const {
  createDriver,
  greeting,
  editDriver,
  deleteDriver,
  getNearbyDrivers,
} = require("../controllers/drivers_controllers");

module.exports = (app) => {
  app.get("/api", greeting);

  app.post("/api/drivers", createDriver);
  app.put("/api/drivers/:id", editDriver);
  app.delete("/api/drivers/:id", deleteDriver);
  app.get("/api/drivers", getNearbyDrivers);
};
