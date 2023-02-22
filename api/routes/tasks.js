const express = require('express');
const router = express.Router();
const controllers = require("../../controllers/TaskController");


router.route("/").get(controllers.getAllTasks);
router.route("/").post(controllers.createTask);
router.route("/:id").get(controllers.getTask);
router.route("/:id").put(controllers.updateTask);
router.route("/:id").delete(controllers.deleteTask);



module.exports = router;
