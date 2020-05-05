const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codeial_development');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"error starting database"));

db.once('open',function(){
    console.log("successfuly connected to database");
});

module.exports = db;