const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    gender: {
      type: String,
    },
    firstname: {
      type: String,
    },
    city: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    state: {
      type: String,
    },
    zip: {
      type: String,
    },
    dob: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false, // Disable the version key
  }
);

module.exports = mongoose.model("User", userSchema, "User");
