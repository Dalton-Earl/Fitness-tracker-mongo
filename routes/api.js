const router = require("express").Router();

const Workout = require("../models/workout");

router.post("api/workouts", ({ body }, res) =>{
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

router.post("/api/workouts/bulk", ({ body }, res) => {
    Transaction.insertMany(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workout", (req, res) => {
    Transaction.find({})
      .sort({ day: -1 })
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.post("api/workouts/:id", ({ body }, res) =>{
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

  router.get("/api/workout/range", (req, res) => {
    Transaction.find({})
      .sort({ day: -1 })
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  module.exports = router;