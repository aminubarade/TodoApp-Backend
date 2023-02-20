const express = require('express');
const router = express.Router();
const controllers = require("../../controllers/TaskController");


router.route("/").get(controllers.getAllTasks);
router.route("/").post(controllers.createTask);
router.route("/:id").get(controllers.getTask);
router.route("/:id").get(controllers.updateTask);
router.route("/:id").get(controllers.deleteTask);



module.exports = router;
