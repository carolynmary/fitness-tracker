const mongoose = require("mongoose");
// let validator = require('validator')

let workoutSchema = new mongoose.Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Must select an exercise type",
            },
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number   // (if cardio?)
        }
    ]
})

module.exports = mongoose.model('Workouts', workoutSchema)