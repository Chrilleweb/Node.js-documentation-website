const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("HomePage", {
    pageTitle: "Home Page",
  });
});

router.get("/functions", (req, res) => {
  res.render("Functions", {
    pageTitle: "Functions",
  });
});

router.get("/variables", (req, res) => {
  res.render("Variables", {
    pageTitle: "Variables",
  });
});

router.get("/data-types", (req, res) => {
  res.render("DataTypes", {
    pageTitle: "Data Types",
  });
})

module.exports = router;
