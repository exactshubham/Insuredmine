const mongoose = require("mongoose");

// Create schema for LOB
const lobSchema = new mongoose.Schema(
  {
    lob: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false, // Disable the version key
  }
);
module.exports = mongoose.model("LOB", lobSchema, "LOB");
