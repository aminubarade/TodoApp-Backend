const express = require('express');
const router = express.Router();
const controllers = require("../../controllers/AuthController");


router.route("/login/:username/").post(controllers.login);
router.route("/:username").post(controllers.register);
router.route("/logout").post(controllers.logout);


module.exports = router;
