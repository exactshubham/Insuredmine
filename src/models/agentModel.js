const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema(
  {
    agent: {
      type: String,
    },
    userType: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false, // Disable the version key
  }
);
module.exports = mongoose.model("Agent", agentSchema, "Agent");
