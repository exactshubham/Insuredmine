const mongoose = require("mongoose");

// Create schema for Carrier
const carrierSchema = new mongoose.Schema(
  {
    carrier: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false, // Disable the version key
  }
);

module.exports = mongoose.model("Carrier", carrierSchema, "Carrier");
