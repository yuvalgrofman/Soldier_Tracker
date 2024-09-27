const resultController = require("../controllers/result.js");

const express = require("express");
const router = express.Router();

router.post("/", resultController.updateResult);
router.get("/:testName-:soldierId", resultController.getResult);

module.exports = router;