const conn = require("../config/db");

exports.getAllTasks = (req, res, next) => {
  conn.query("SELECT * FROM tasklist", function (err, data, fields) {
    res.status(200).json(data);
  });
 };

 exports.createTask = (req, res, next) => {
  const values = [req.body.todo, "pending"];
  conn.query(
    "INSERT INTO tasksTable (todo) VALUES(?)",
    [values],
    function (err, data, fields) {
      res.status(201).json({
        status: "success",
        message: "task created!",
      });
    }
  );
 };

 exports.getTask = (req, res, next) => {
  conn.query(
    "SELECT * FROM tasksTable WHERE id = ?",
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

 exports.updateTask = (req, res, next) => {
  conn.query(
    "UPDATE tasksTable SET status='completed' WHERE id=?",
    [req.params.id],
    function (err, data, fields) {
      res.status(201).json({
        status: "success",
        message: "task updated!",
      });
    }
  );
 };

 exports.deleteTask = (req, res, next) => {
  conn.query(
    "DELETE FROM tasksTable WHERE id=?",
    [req.params.id],
    function (err, fields) {
      res.status(201).json({
        status: "success",
        message: "Task deleted!",
      });
    }
  );
 }

