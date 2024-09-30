const resultController = require("../controllers/result.js");

const express = require("express");
const router = express.Router();

router.post("/update", resultController.updateResult);
router.post("/create", resultController.createResult);
router.get("/:testLink-:soldierId", resultController.getResult);
router.get("/:resultObjectId", resultController.getResultByObjectId);

module.exports = router;