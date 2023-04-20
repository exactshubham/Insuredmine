// Import required modules
const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");
const userController = require("../controllers/userController");
const accountController = require("../controllers/accountController");
const policyController = require("../controllers/policyController")

// User routes
router.post("/users", userController.createUser);         // Create a new user
router.get("/users", userController.getUsers);            // Get all users
router.get("/users/:id", userController.getUserById);     // Get a specific user by ID
router.patch("/users/:id", userController.updateUserById);// Update a specific user by ID
router.delete("/users/:id", userController.deleteUserById);// Delete a specific user by ID

// Account routes
router.post("/accounts", accountController.createAccount);         // Create a new account
router.get("/accounts", accountController.getAccounts);            // Get all accounts
router.get("/accounts/:id", accountController.getAccountById);     // Get a specific account by ID
router.patch("/accounts/:id", accountController.updateAccountById);// Update a specific account by ID
router.delete("/accounts/:id", accountController.deleteAccountById);// Delete a specific account by ID

// Policy routes
router.post("/policies", policyController.createPolicy);         // Create a new policy
router.get("/policies", policyController.getPolicies);            // Get all policies
router.get("/policies/:id", policyController.getPolicyById);     // Get a specific policy by ID
router.patch("/policies/:id", policyController.updatePolicyById);// Update a specific policy by ID
router.delete("/policies/:id", policyController.deletePolicyById);// Delete a specific policy by ID

// Upload route for Excel data
module.exports = (upload, xlsx) => {
  router.post("/upload", upload.single("file"), dataController.excelData); // Upload Excel data
  // Handle all other requests to non-existent routes
  router.all("/*", function (req, res) {
    return res.status(404).send({ status: false, message: "Path not found" });
  });

  return router;
};
