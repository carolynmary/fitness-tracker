const router = require("express").Router();
const WorkoutModel = require("../models/Workouts.js");

// CREATE NEW WORKOUT
router.post("/api/workouts", ({ body }, res) => {
  // // const workout = new WorkoutModel({ body })
  // // workout.save()
  //   WorkoutModel.create({body})
  //   .then(data => {
  //     res.json(data);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
});

// UPDATE - CONTINUE WORKOUT
router.put("/api/workouts/:id", (req, res) => {
  // console.log(req.params);
  // const workoutId = req.params.id;
  // WorkoutModel.findOneAndUpdate({
  //   _id: workoutId,   // search query
  // },
  //   {
  //     exercises: req.body   // field: values to update
  //   },
  //   {
  //     new: true,   // return updated doc
  //     runValidators: true,   // validate before update
  //   }
  // )
  //   .then(data => {
  //     res.json(data);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
});

// FIND WORKOUT
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

// FIND WORKOUT
// router.get("/api/workouts/:id", (req, res) => {
  // console.log(req.params);
  // const workoutId = req.params.id;
  // WorkoutModel.find({
  //   _id: workoutId,
  // })
  //   //   .sort({ date: -1 })
  //   .then(data => {
  //     res.json(data);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
// });

// router.get("/api/workouts/:id/range", (req, res) => {
  // console.log(req.params);
  // const workoutId = req.params.id;
  // WorkoutModel.find({
  //   _id: workoutId,
  // })
  //   //   .sort({ date: -1 })
  //   .then(data => {
  //     res.json(data);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
// });

// DELETE WORKOUT
router.delete("/api/workouts/:id", ({ body, params }, res) => {
  // // console.log(params);
  // WorkoutModel.findOneAndRemove({
  //   _id: params.id,   // search query
  // },
  //   {
  //     exercises: req.body   // field: values to delete
  //   },
  //   {
  //     new: true,   // return updated doc
  //     runValidators: true,   // validate before update
  //   }
  // )
  //   .then(data => {
  //     res.json(data);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
});

module.exports = router;
