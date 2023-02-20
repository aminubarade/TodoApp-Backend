const conn = require("../config/db");

exports.getAllTodos = (req, res, next) => {
  conn.query("SELECT * FROM todolist", function (err, data, fields) {
    res.status(200).json(data);
  });
 };

 exports.createTodo = (req, res, next) => {
  const values = [req.body.todo, "pending"];
  conn.query(
    "INSERT INTO todoList (todo) VALUES(?)",
    [values],
    function (err, data, fields) {
      res.status(201).json({
        status: "success",
        message: "todo created!",
      });
    }
  );
 };

 exports.getTodo = (req, res, next) => {
  conn.query(
    "SELECT * FROM todolist WHERE id = ?",
    [req.params.id],
    function (err, data, fields) {
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    }
  );
 };

 exports.updateTodo = (req, res, next) => {
  conn.query(
    "UPDATE todolist SET status='completed' WHERE id=?",
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
  conn.query(
    "DELETE FROM todolist WHERE id=?",
    [req.params.id],
    function (err, fields) {
      res.status(201).json({
        status: "success",
        message: "todo deleted!",
      });
    }
  );
 }
