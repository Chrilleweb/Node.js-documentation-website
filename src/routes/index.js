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

router.get("/rest-api", (req, res) => {
  res.render("RestAPI", {
    pageTitle: "REST API",
  });
})

router.get("/package-json", (req, res) => {
  const packageJsonPath = require.resolve('../../package.json'); 
  const packageJsonContent = require(packageJsonPath);

  res.render("PackageJson", {
    pageTitle: "Package-json",
    packageJson: packageJsonContent
  });
});

router.get("/html-express", (req, res) => {

  const message = "This is data from express !";

  res.render("ServingHTML", {
    pageTitle: "HTML Express",
    message: message
  });
})

router.get("/git-terminal", (req, res) => {
  res.render("GitTerminal", {
    pageTitle: "Git Terminal",
  });
})

router.get("/server-side-rendering", (req, res) =>{
  res.render("ServerSideRendering", {
    pageTitle: "Server Side Rendering"
  });
})

module.exports = router;
