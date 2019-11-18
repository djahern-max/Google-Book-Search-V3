const config = require('config');
let mongoose = require('mongoose');
let express = require('express');

// Initializing the port
let PORT = process.env.PORT || 5000;

// Initializing Express
let app = express();

let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/googlebooks';

mongoose.connect(MONGODB_URI);

// Starting the server
app.listen(PORT, function() {
  console.log('App running on port ' + PORT + '!');
});
