"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var dotenv = __importStar(require("dotenv"));
var seedData = require("../views/data/seed.js");
var router = express.Router();
// get the API key
dotenv.config();
var nutrition_api_key = process.env.NUTRITION_API_KEY;
/* GET a specific food. */
router.get("/:food", function (req, res, next) {
    res.send(nutrition_api_key); //seedData);
});
router.get("/search/:queries", function (req, res, next) {
    res.send("search a food " + req.params);
});
module.exports = router;
