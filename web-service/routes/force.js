const forceController = require("../controllers/force.js");

const express = require("express");
const router = express.Router();

router.post("/platoon", forceController.createPlatoon);
router.post("/company", forceController.createCompany);
router.post("/section", forceController.createSection);
router.post("/addSoldier", forceController.addSoldierToSection);

module.exports = router;