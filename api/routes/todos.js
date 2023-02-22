const express = require('express');
const router = express.Router();
const controllers = require("../../controllers/TodoController");

router.route("/").get(controllers.getAllTodos);
router.route("/").post(controllers.createTodo);
router.route("/:id").get(controllers.getTodo);
router.route("/:id").put(controllers.updateTodo);
router.route("/:id").delete(controllers.deleteTodo);



module.exports = router;
