//import express router
var express = require('express');
var router = express.Router();

//import model
var ZooModel = require('../models/ZooAnimals');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//add animal to model dynamic url
router.get('/zoowebapi/animal/add/:id/:type/:description', (req, res) => {

  //pass new item attributes
  newAnimal = {
    animal_id : req.params.id,
    animal_type : req.params.type,
    animal_description : req.params.description
  };

  //create new aminal with passed attributes
  ZooModel.create(newAnimal, (error, results) => {
    if (error) {
      return console.log(error)
    }
    else{
      res.send(results)
    }
  })

});

//find animal by id
router.get('/zoowebapi/animal/get/:id', (req,res) => {

  ZooModel.find({animal_id:req.params.id}, (error, results) => {
    if(error) console.log(error);
    else res.send(results)
  })

});

//update animal by id
router.get('/zoowebapi/animal/update/:id/:type/:description', (req,res) => {

  ZooModel.findOneAndUpdate({animal_id : req.params.id},{animal_type:req.params.type, animal_description:req.params.description}, (error, results) => {
    res.send('updated ' + req.params.id)
  });

});

//delete animal by id
router.get('/zoowebapi/animal/del/:id', (req,res) => {

  ZooModel.deleteOne({animal_id: req.params.id}, (error) => {
    if (error) console.log(error);
    else res.send('deleted ' + req.params.id)
  })

});


module.exports = router;
