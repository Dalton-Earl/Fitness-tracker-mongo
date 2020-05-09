const router = require("express").Router();

const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) =>{
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

router.post("/api/workouts/", ({ body }, res) => {
    Workout.insertOne(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .sort({ day: -1 })
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.put("/api/workouts/:id", ({ body }, res) =>{
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

  router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .sort({ day: -1 })
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  module.exports = router;