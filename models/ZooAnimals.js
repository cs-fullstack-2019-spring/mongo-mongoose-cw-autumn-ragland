//import mongoose for database collection schemas
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create schema
var ZooAnimals = new Schema (
    {
        animal_id : String,
        animal_type : String,
        animal_description : String
    }
);

module.exports = mongoose.model('ZooAnimals', ZooAnimals);