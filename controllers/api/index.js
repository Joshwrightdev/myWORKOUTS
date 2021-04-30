const router = require("express").Router();

const userRoutes = require("./user-routes");

const workoutRoutes = require("./individual-workout-routes");

router.use("/users", userRoutes);

router.use("/workouts", workoutRoutes);
// router.use("/createworkout", createworkoutRoutes);

module.exports = router;
