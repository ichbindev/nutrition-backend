var express = require("express");
var seed = require("./javascripts/seed.js");
var router = express.Router();

/* GET a specific food. */
router.get("/:food", function (req, res, next) {
  res.send(seed);
});

router.get("/search/:queries", function (req, res, next) {
  res.send("search a food " + req.params / queries);
});

module.exports = router;
