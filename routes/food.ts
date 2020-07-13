import express = require("express");
import * as dotenv from "dotenv";
import axios from 'axios';

var seedData = require("../views/data/seed.js");
var router = express.Router();

// get the API key
dotenv.config();
const nutrition_api_key = process.env.NUTRITION_API_KEY;

/* GET a specific food. */
router.get("/:food", function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  axios.get("https://api.spoonacular.com/recipes/complexSearch?query=cheese&apiKey=" + nutrition_api_key).then(result => res.send(result), error => res.send(error)).catch(error => res.send(error));
  // res.send(seedData);
});

router.get("/search/:queries", function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  res.send("search a food " + req.params);
});

module.exports = router;
