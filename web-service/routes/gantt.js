const ganttController = require("../controllers/gantt.js");

const express = require("express");
const router = express.Router();

router.get("/:company-:week-:link", ganttController.getGantt);
router.post("/update", ganttController.updateGantt);
router.post("/create", ganttController.createGantt);


module.exports = router;