const express = require('express');
const router = express.Router();
const Usercontroller = require("../../controllers/UserController");


router.route("/").get(Usercontroller.getAllUsers);
router.route("/").post(Usercontroller.createUser);
router.route("/:id").get(Usercontroller.getUser);
router.route("/:id").put(Usercontroller.updateUser);
router.route("/:id").delete(Usercontroller.deleteUser);



module.exports = router;
