//depencies 
const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

//Starter code from mini project and rename to 'workout'
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        trim: true,
      },
      duration: Number,
      weight: {
        type: Number,
        default: 0
      },
      reps: {
        type: Number,
        default: 0
      },
      sets: {
        type: Number,
        default: 0
      },
      distance: {
        type: Number,
        default: 0
      }
    }
  ],
  totalDuration: {
    type: Number,
    default: 0,
  }
  });
  
  // workoutSchema.virtual("totalDuration").get(function() {
  //   return this.exercises.reduce((total, exercise) => {
  //     return total + exercise.duration;
  //   }, 0);
  // });

  const Workout = mongoose.model("Workout", WorkoutSchema);
  
  module.exports = Workout;



