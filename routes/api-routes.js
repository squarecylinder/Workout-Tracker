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

  // app.get("/api/workouts/:id", (req, res) => {
  //   db.Workout.findById(req.params.id).then((dbWorkout) => {
  //     res.json(dbWorkout);
  //   })
  // });

  // app.put("/api/workouts/:id"), (req, res) => {
  //   const id = location.search.split("=")[1];
  //   db.Workout.findById(id).then((dbWorkout) => {
  //     res.json(dbWorkout);
  //   });
  // };
};