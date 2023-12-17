const { Router } = require("express");
const allDiets = require("../controllers/allDiets.controller");

const dietsRoute = Router();

dietsRoute.get("/", allDiets);

module.exports = dietsRoute;
