const mongoose = require("mongoose");

// Create schema for Policy
const policySchema = new mongoose.Schema(
  {
    agentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agent",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    accountType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
    },
    lobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LOB",
    },
    carrierId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Carrier",
    },
    policy_mode: {
      type: Number,
    },
    policy_number: {
      type: String,
    },
    producer: {
      type: String,
    },
    premium_amount_written: {
      type: Number,
    },
    premium_amount: {
      type: Number,
    },
    policy_type: {
      type: String,
    },
    policy_start_date: {
      type: Date,
    },
    policy_end_date: {
      type: Date,
    },
    csr: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false, // Disable the version key
  }
);

module.exports = mongoose.model("Policy", policySchema, "Policy");
