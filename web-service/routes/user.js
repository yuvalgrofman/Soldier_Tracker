const userController = require("../controllers/user.js");

const express = require("express");
const router = express.Router();

router.post("/verify", userController.verifyUser);
router.post("/", userController.addUser);

module.exports = router;