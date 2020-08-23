const Workout = require("../models/workout.js")

module.exports = function (app) {
    app.get("/api/workouts", function (req, res) {
        Workout.find()
            .then(data => {
                res.json(data)
            });
    });

    app.get("/api/workouts/range", function (req, res) {
        Workout.find({})
            .then(data => {
                res.json(data)
            });
    });

    app.post("/api/workouts", function (req, res) {
        Workout.create({})
            .then(data => {
                res.json(data)
            });
    });

    app.put("/api/workouts/:id", function (req, res) {
        Workout.findByIdAndUpdate(
            req.params.id,
            { $push: { exercises: req.body } },
            { new: true }
        )
            .then(data => {
                res.json(data)
            });
    });
};