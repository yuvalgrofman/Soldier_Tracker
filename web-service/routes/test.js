const testController = require("../controllers/test.js");

const express = require("express");
const router = express.Router();

router.get("/", testController.getTest);

module.exports = router;