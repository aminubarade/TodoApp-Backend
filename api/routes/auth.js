const express = require('express');
const router = express.Router();
const controllers = require("../../controllers/AuthController");


router.route("/:username/:password").post(controllers.login);
router.route("/:username").post(controllers.register);


module.exports = router;
