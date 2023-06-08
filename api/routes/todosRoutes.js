const express = require('express');
const router = express.Router();
const Todocontroller = require("../../controllers/TodoController");


router.route("/").get(Todocontroller.getAllTodos);
router.route("/").post(Todocontroller.createTodo);
router.route("/:id").get(Todocontroller.getTodo);
router.route("/:id").put(Todocontroller.updateTodo);
router.route("/:id").delete(Todocontroller.deleteTodo);



module.exports = router;
