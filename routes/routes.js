const {
  createDriver,
  greeting,
  editDriver,
} = require("../controllers/drivers_controllers");

module.exports = (app) => {
  app.get("/api", greeting);
  app.post("/api/drivers", createDriver);
  app.put("/api/drivers/:id", editDriver);
};
