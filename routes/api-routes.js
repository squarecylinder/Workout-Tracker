var db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    db.Workout.find({}).then(function(dbWorkout) {
      res.json(dbWorkout);
    });

    app.get("/api/workouts/range", function(req, res) {
        db.Workout.find({}).then(function(dbWorkout){
            res.json(dbWorkout);
        })
    })
  });
};