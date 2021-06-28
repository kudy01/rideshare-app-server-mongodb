const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DriverSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  driving: {
    type: Boolean,
    default: false,
  },
  geometry: {
    type: { type: String, default: "Point" },
    coordinates: { type: [Number] },
  },
});

DriverSchema.index({ geometry: "2dsphere" });

const Driver = mongoose.model("driver", DriverSchema);

module.exports = Driver;
