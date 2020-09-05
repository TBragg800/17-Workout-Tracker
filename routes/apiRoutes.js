const db = require("../models");
const express = require("express");
const router = express.Router();

router.get("/api/Workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => { res.json(err); });
});





module.exports = router;