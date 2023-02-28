const sequelize = require("../config/db");
const Todo = require("./../models/Todo");
//const Task = require("./../models/Task");
const { json } = require("body-parser");

//Todo.belongsTo(Task);

exports.getAllTodos = (req, res, next) => {
  sequelize
  .sync()
  .then(async () => {
    const todos = await Todo.findAll();
    res.status(200).json(todos);
  })
  .catch(()=>{
    res.status(404).json({
      status:"Error",
      message: "No todo available"
    })
  }
  )
  
 };

 exports.createTodo = (req, res, next) => {
  sequelize
  .sync()
  .then(()=> {
    Todo.create({
      id: req.body.id,
      todo: req.body.todo,
      status: req.body.status
  })
  res.status(200).json({
    status: "success",
    message: "Todo created"
  })
})
  .catch(()=>{
    res.status(404).json({
      status: "error",
      message: "Todo not created"
    })
  })
 };

 exports.getTodo = (req, res, next) => {
  sequelize
  .sync()
  .then(async () => {
    const todo = await Todo.findAll(
      {
        where: {
          id: req.params.id
        }
      }
    );
    res.status(200).json(todo);
  })
  .catch(()=> {
    res.status(404).json({
      status: "Failed",
      message: "Not found"
    })
  })
 };

 exports.updateTodo = (req, res, next) => {
  conn.query(
    "UPDATE todolist SET description='completed' WHERE id=?",
    [req.params.id],
    function (err, data, fields) {
      res.status(201).json({
        status: "success",
        message: "todo updated!",
      });
    }
  );
 };

 exports.deleteTodo = (req, res, next) => {
  sequelize
  .sync()
  .then(async () => {
    Todo.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    );
    res.status(200).json({
      status: "success",
      message: "Todo Deleted"
    });
  })
  .catch(()=> {
    res.status(404).json({
      status: "Failed",
      message: "Could not Delete"
    })
  })
 };

