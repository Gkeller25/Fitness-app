const db = require("../models");

// Defining methods for the const db = require("../models");

// Defining methods for the workoutsController
module.exports = {
  findAll: function(req, res) {
    db.Workout
      .find()
      
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      
  },
  findById: function(req, res) {
    console.log("Params: ", req.params.CreatedBy); 
    const id = JSON.stringify(req.params.id);
    db.Workout
      .find({CreatedBy: id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("REQ.BODY: "+JSON.stringify(req.body));
    db.Workout
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Workout
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Workout
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
