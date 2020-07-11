"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var seedData = require("../views/data/seed.js");
var router = express.Router();
/* GET a specific food. */
router.get("/:food", function (req, res, next) {
    res.send(seedData);
});
router.get("/search/:queries", function (req, res, next) {
    res.send("search a food " + req.params);
});
module.exports = router;
