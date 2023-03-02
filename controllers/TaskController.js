const sequelize = require("../config/db");
const Task = require("./../models/Task");
const { json } = require("body-parser");

exports.getAllTasks = (req, res, next) => {
  sequelize
  .sync()
  .then(async () => {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  })
  .catch(()=> {
    res.status(404).json({
      status: "Failed",
      message: "Page not found"
    })
  })
 };

 //create Task Method
 exports.createTask = (req, res, next) => {
  sequelize
  .sync()
  .then(()=> {
    Task.create({
      id: req.body.id,
      task: req.body.task,
      description: req.body.description,
      status: req.body.status
  })
  res.status(200).json({
    status: "success",
    message: "Task created"
  })
})
.catch(()=>{
    res.status(404).json({
      status: "error",
      message: "Task not created"
    })
  })
 };

 //Get a single task method 
 exports.getTask = (req, res, next) => {
  sequelize
  .sync()
  .then(async () => {
    const task = await Task.findAll(
      {
        where: {
          id: req.params.id
        }
      }
    );
    res.status(200).json(task);
  })
  .catch(()=> {
    res.status(404).json({
      status: "Failed",
      message: "Page not found"
    })
  })
 };

 //Update task method
 exports.updateTask = (req, res, next) => {
  
 };


//Delete task method
 exports.deleteTask = (req, res, next) => {
  sequelize
  .sync()
  .then(async () => {
    Task.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    );
    res.status(200).json({
      status: "success",
      message: "Task Deleted"
    });
  })
  .catch(()=> {
    res.status(404).json({
      status: "Failed",
      message: "Could not Delete"
    })
  })
 }

