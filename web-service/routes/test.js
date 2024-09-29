const testController = require("../controllers/test.js");

const express = require("express");
const router = express.Router();

router.get("/:testLink", testController.getTest);

module.exports = router;