const testController = require("../controllers/test.js");

const express = require("express");
const router = express.Router();

router.get("/:testName", testController.getTest);

module.exports = router;