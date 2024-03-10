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

module.exports = router;
