const router = require("express").Router();
const express = require("express");
const { isLoggedIn } = require("../middleware/route-guard");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// Profile page
router.get("/profile", isLoggedIn, (req, res, next) => {
  // When you want to use the user info in a view
  // Access logged in user
  const user = req.session.user;
  res.render("profile", { user: user });
});

module.exports = router;
