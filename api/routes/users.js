const express = require('express');
const router = express.Router();
const controllers = require("../../controllers/UserController");


router.route("/").get(controllers.getAlUsers);
router.route("/").post(controllers.createUser);
router.route("/:id").get(controllers.getUser);
router.route("/:id").put(controllers.updateUser);
router.route("/:id").delete(controllers.deleteUser);



module.exports = router;
