const forceController = require("../controllers/force.js");

const express = require("express");
const router = express.Router();

router.post("/platoon", forceController.createPlatoon);
router.post("/company", forceController.createCompany);
router.post("/updatePlatoons", forceController.updatePlatoons);
router.post("/section", forceController.createSection);
router.get("/platoon/:platoonId", forceController.getPlatoon);
router.get("/company/:companyId", forceController.getCompany);
router.get("/section/:sectionId", forceController.getSection);
router.post("/addSoldier", forceController.addSoldierToSection);

module.exports = router;