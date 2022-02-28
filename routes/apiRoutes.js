const Workout= require("../models/workout");
const router =require("express").Router();

router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration:
          { $sum: '$exercises.duration' },
      }
    }
  ])
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
        totalWeight: { $sum: "$exercises.weight" },
      },
    },
  ])
    .limit(7)
    .sort({ date: -1 })
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
  .then(dbworkout => {
    res.json(dbworkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    { _id: params.id },
    { $push: { exercises: body } },
    { new: true }
  )
  .then(dbworkout => {
    res.json(dbworkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

module.exports = router;


//TODO
// Need to pull data for the workout display page
// Need to POST completed workouts 
//Need to UPDATE works via MongoDB 
// Double check syntax to other files to avoid errors