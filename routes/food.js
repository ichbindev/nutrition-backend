var express = require("express");
var router = express.Router();

/* GET a specific food. */
router.get("/:food", function (req, res, next) {
  res.send("GET a food");
});

router.get("/search/:queries", function (req, res, next) {
  res.send("search a food");
});

module.exports = router;
