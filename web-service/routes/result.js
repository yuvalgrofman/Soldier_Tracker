const resultController = require("../controllers/result.js");

const express = require("express");
const router = express.Router();

router.post("/", resultController.updateResult);
router.get("/:testLink-:soldierId", resultController.getResult);
router.get("/:resultObjectId", resultController.getResultByObjectId);

module.exports = router;