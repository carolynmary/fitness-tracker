const router = require("express").Router();
const WorkoutModel = require("../models/Workouts.js");

// CREATE NEW WORKOUT
router.post("/api/workouts", ({ body }, res) => {
    WorkoutModel.create({body})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// UPDATE/CONTINUE WORKOUT
router.put("/api/workouts/:id", (req, res) => {
  console.log(req.params);
  const workoutId = req.params.id;
  WorkoutModel.findOneAndUpdate({
    _id: workoutId,   // search query
  },
    {
      $push: {exercises: req.body}   // field: values to update
    },
    {
      new: true,   // return updated doc
      runValidators: true,   // validate before update
    }
  )
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// GET WORKOUTS
router.get("/api/workouts", (req, res) => {
  console.log(req.params);
  WorkoutModel.find({})
    //   .sort({ date: -1 })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// STATS PAGE
router.get("/api/workouts/range", (req, res) => {
  WorkoutModel.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// DELETE WORKOUT
router.delete("/api/workouts/:id", ({ body, params }, res) => {
  WorkoutModel.findOneAndRemove({
    _id: params.id,   // search query
  },
    {
      exercises: req.body   // field: values to delete
    },
    {
      new: true,   // return updated doc
      runValidators: true,   // validate before update
    }
  )
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
