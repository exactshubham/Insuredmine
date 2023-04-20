// Importing required packages and models
const express = require('express');
const xlsx = require('xlsx');
const router = express.Router();
const Agent = require('../models/agentModel');
const User = require('../models/userModel');
const Account = require('../models/accountModel');
const LOB = require('../models/lobModel');
const Carrier = require('../models/carrierModel');
const Policy = require('../models/policyModel');

// Route for uploading file and saving data to DB
const excelData = async (req, res) => {
  try {
    // Read uploaded file and convert to workbook object
    const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
        
    // Process and save data to the respective collections
    const agentData = xlsx.utils.sheet_to_json(workbook.Sheets['Sheet1']);
    await Agent.insertMany(agentData);
   
    const userData = xlsx.utils.sheet_to_json(workbook.Sheets['Sheet1']);
    await User.insertMany(userData);

    const accountData = xlsx.utils.sheet_to_json(workbook.Sheets['Sheet1']);
    await Account.insertMany(accountData);

    const lobData = xlsx.utils.sheet_to_json(workbook.Sheets['Sheet1']);
    await LOB.insertMany(lobData);

    const carrierData = xlsx.utils.sheet_to_json(workbook.Sheets['Sheet1']);
    await Carrier.insertMany(carrierData);

    const policyData = xlsx.utils.sheet_to_json(workbook.Sheets['Sheet1']);
    await Policy.insertMany(policyData);
    
    // Send response on successful upload
    res.status(200).json({ message: 'Data uploaded successfully!' });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports.excelData = excelData;
