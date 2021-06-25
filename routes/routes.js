const {
  createDriver,
  greeting,
} = require("../controllers/drivers_controllers");

module.exports = (app) => {
  app.get("/api", greeting);
  app.post("/api/drivers", createDriver);
};
