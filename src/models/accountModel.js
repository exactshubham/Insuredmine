const mongoose = require("mongoose");

// Create schema for Account
const accountSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    account_name: {
      type: String,
    },
    account_type: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false, // Disable the version key
  }
);

module.exports = mongoose.model("Account", accountSchema, "Account");
