// Importing the models
const User = require("../models/userModel");

// CREATE user
const createUser = async (req, res) => {
  try {
    const data = req.body;
    // Checking if request body is empty
    if (!Object.keys(req.body).length > 0) {
      return res
        .status(400)
        .send({ status: false, message: "Please provide User details" });
    }
    // Creating a new user with the provided data
    let user = await User.create(data);
    // Sending response with the newly created user
    return res.status(201).send({ status: true, data: user });
  } catch (error) {
    console.error(error);
    // Sending error response if any internal server error occurs
    res.status(500).json({ error: "Internal server error" });
  }
};


// READ all users
const getUsers = async (req, res) => {
  try {
    // Finding all users in the database
    let users = await User.find({});
    // Sending response with all users
    return res.status(200).send({ status: true, data: users });
  } catch (error) {
    console.error(error);
    // Sending error response if any internal server error occurs
    res.status(500).json({ error: "Internal server error" });
  }
};


// READ user by ID
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    // Finding a user with the provided ID
    let user = await User.findById(id);
    // Sending error response if no user is found with the provided ID
    if (!user) {
      return res.status(404).send({ status: false, message: "User not found" });
    }
    // Sending response with the user found with the provided ID
    return res.status(200).send({ status: true, data: user });
  } catch (error) {
    console.error(error);
    // Sending error response if any internal server error occurs
    res.status(500).json({ error: "Internal server error" });
  }
};


// UPDATE user by ID
const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    // Checking if request body is empty
    if (!Object.keys(req.body).length > 0) {
      return res
        .status(400)
        .send({ status: false, message: "Please provide User details" });
    }
    // Finding a user with the provided ID and updating it with the provided data
    let user = await User.findByIdAndUpdate(id, data, { new: true });
    // Sending error response if no user is found with the provided ID
    if (!user) {
      return res.status(404).send({ status: false, message: "User not found" });
    }
    // Sending response with the updated user
    return res.status(200).send({ status: true, data: user });
  } catch (error) {
    console.error(error);
    // Sending error response if any internal server error occurs
    res.status(500).json({ error: "Internal server error" });
  }
};


// DELETE user by ID
const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    // Finding a user with the provided ID and deleting it
    let user = await User.findByIdAndDelete(id);
    // Sending error response if no user is found with the provided ID
    if(!user) {
      return res.status(404).send({ status: false, message: "User not found" });
      }
      // Sending success response if user is deleted successfully
      return res.status(200).send({ status: true, message: "User deleted successfully" });
      } catch (error) {
      console.error(error);
      // Sending error response if there is an internal server error
      res.status(500).json({ error: "Internal server error" });
      }
      };
      
      // Exporting all the controller functions
      module.exports = { createUser, getUsers, getUserById, updateUserById, deleteUserById };
