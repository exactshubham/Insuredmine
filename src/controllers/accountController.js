// Importing the Account model
const Account = require("../models/accountModel");

// CREATE account
const createAccount = async (req, res) => {
try {
const data = req.body;
if (!Object.keys(req.body).length > 0) { // check if request body is not empty
return res
.status(400)
.send({ status: false, message: "Please provide Account details" });
}
let account = await Account.create(data); // create new account using the Account model
return res.status(201).send({ status: true, data: account });
} catch (error) {
console.error(error);
res.status(500).json({ error: "Internal server error" });
}
};

// GET all accounts
const getAccounts = async (req, res) => {
try {
let accounts = await Account.find({}); // find all accounts in the database
return res.status(200).send({ status: true, data: accounts });
} catch (error) {
console.error(error);
res.status(500).json({ error: "Internal server error" });
}
};

// GET account by ID
const getAccountById = async (req, res) => {
try {
const id = req.params.id;
let account = await Account.findById(id); // find account by ID
if (!account) {
return res.status(404).send({ status: false, message: "Account not found" });
}
return res.status(200).send({ status: true, data: account });
} catch (error) {
console.error(error);
res.status(500).json({ error: "Internal server error" });
}
};

// UPDATE account by ID
const updateAccountById = async (req, res) => {
try {
const id = req.params.id;
const data = req.body;
if (!Object.keys(req.body).length > 0) { // check if request body is not empty
return res
.status(400)
.send({ status: false, message: "Please provide Account details" });
}
let account = await Account.findByIdAndUpdate(id, data, { new: true }); // find and update account by ID
if (!account) {
return res.status(404).send({ status: false, message: "Account not found" });
}
return res.status(200).send({ status: true, data: account });
} catch (error) {
console.error(error);
res.status(500).json({ error: "Internal server error" });
}
};

// DELETE account by ID
const deleteAccountById = async (req, res) => {
try {
const id = req.params.id;
let account = await Account.findByIdAndDelete(id); // find and delete account by ID
if (!account) {
return res.status(404).send({ status: false, message: "Account not found" });
}
return res.status(200).send({ status: true, message: "Account deleted successfully" });
} catch (error) {
console.error(error);
res.status(500).json({ error: "Internal server error" });
}
}

module.exports = {
createAccount, // create a new account
getAccounts, // get all accounts
getAccountById, // get an account by ID
updateAccountById, // update an account by ID
deleteAccountById // delete an account by ID
}