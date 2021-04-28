const router = require("express").Router();
const { User, Workout, WorkoutHistory } = require("../models");
const withAuth = require("../utils/auth");

// TODO: Add the homepage route here (So when you go to localhost:3001/ it renders the homepage)

// TODO: Add the login route here (So when you go to localhost:3001/login it renders the login)
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

module.exports = router;

// TODO: Add the signup route here (So when you go to localhost:3001/signup it renders the signup)




// TODO: Add the workouts page here (So when you go to localhost:3001/workouts it renders the workouts page)

module.exports = router;
