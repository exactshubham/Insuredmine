// Importing the models
const Policy = require("../models/policyModel");

// CREATE policy
const createPolicy = async (req, res) => {
  try {
    const data = req.body;
    // check if request body has data
    if (!Object.keys(req.body).length > 0) {
      return res
        .status(400)
        .send({ status: false, message: "Please provide Policy details" });
    }
    // create policy
    let policy = await Policy.create(data);
    return res.status(201).send({ status: true, data: policy });
  } catch (error) {
    console.error(error);
    // internal server error
    res.status(500).json({ error: "Internal server error" });
  }
};

// GET all policies
const getPolicies = async (req, res) => {
  try {
    // get all policies
    let policies = await Policy.find({});
    return res.status(200).send({ status: true, data: policies });
  } catch (error) {
    console.error(error);
    // internal server error
    res.status(500).json({ error: "Internal server error" });
  }
}

// GET policy by ID
const getPolicyById = async (req, res) => {
  try {
    const id = req.params.id;
    // find policy by id
    let policy = await Policy.findById(id);
    if (!policy) {
      // policy not found
      return res.status(404).send({ status: false, message: "Policy not found" });
    }
    return res.status(200).send({ status: true, data: policy });
  } catch (error) {
    console.error(error);
    // internal server error
    res.status(500).json({ error: "Internal server error" });
  }
};

// UPDATE policy by ID
const updatePolicyById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    // check if request body has data
    if (!Object.keys(req.body).length > 0) {
      return res
        .status(400)
        .send({ status: false, message: "Please provide Policy details" });
    }
    // find and update policy
    let policy = await Policy.findByIdAndUpdate(id, data, { new: true });
    if (!policy) {
      // policy not found
      return res.status(404).send({ status: false, message: "Policy not found" });
    }
    return res.status(200).send({ status: true, data: policy });
  } catch (error) {
    console.error(error);
    // internal server error
    res.status(500).json({ error: "Internal server error" });
  }
};

// DELETE policy by ID
const deletePolicyById = async (req, res) => {
  try {
    const id = req.params.id;
    // find and delete policy
    let policy = await Policy.findByIdAndDelete(id);
    if (!policy) {
      // policy not found
      return res.status(404).send({ status: false, message: "Policy not found" });
    }
    return res.status(200).send({ status: true, message: "Policy deleted successfully" });
  } catch (error) {
    console.error(error);
    // internal server error
    res.status(500).json({ error: "Internal server error" });
  }
};

// export the functions
module.exports = {createPolicy, getPolicies, getPolicyById, updatePolicyById, deletePolicyById}
