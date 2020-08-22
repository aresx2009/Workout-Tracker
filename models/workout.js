const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema; (
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "exercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "exercise name"
                },
                duration: {
                    type: Number,
                    required: "exercise duration"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);
workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercises) => {
        return total + exercises.duration;
    }, 0);
});
const Workout = mongoose.model("workout", workoutSchema);
module.exports = Workout;