const express = require('express');
const router = express.Router();
const Taskcontroller = require("../../controllers/TaskController");
const auth = require('../../middlewares/auth');

if(auth){
   router.route("/").get(Taskcontroller.getAllTasks);
   router.route("/").post(Taskcontroller.createTask);
   router.route("/:id").get(Taskcontroller.getTask);
   router.route("/:id").put(Taskcontroller.updateTask);
   router.route("/:id").delete(Taskcontroller.deleteTask);
}
else {
   console.log("Redirect");
}





module.exports = router;
