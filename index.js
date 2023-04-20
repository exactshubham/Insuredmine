const express = require('express');
const mongoose = require('mongoose');
const app = express();
const multer = require('multer');
const xlsx = require('xlsx');
app.use(express.json());

// Import the route and initialize multer and xlsx middleware
const route = require('./src/routes/route')(multer({ storage: multer.memoryStorage() }), xlsx);

// Load environment variables from config file
require("dotenv").config({path:"./config.env"});

// Disable strictQuery to allow querying on non-existent fields
mongoose.set('strictQuery', false);

// Connect to the database
mongoose
  .connect('mongodb+srv://ShubhamChaturvedi:9555047172@mongodbwithshubham.z3dowao.mongodb.net/insuredminedata(csv)', {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err.message);
  });

// Use middleware only for the routes that need it
app.use('/', route);

// Start the server
app.listen(process.env.PORT || 3001, function () {
  console.log('Express app running on PORT ' + (process.env.PORT || 3001));
}); 
