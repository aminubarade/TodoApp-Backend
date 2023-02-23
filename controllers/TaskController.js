const conn = require("../config/db");
const Todo = require("./../models/Todo");
const Task = require("./../models/Task");

Task.hasMany(Todo);

exports.getAllTasks = (req, res, next) => {


 };

 exports.createTask = (req, res, next) => {
  
 };

 exports.getTask = (req, res, next) => {
  
 };

 exports.updateTask = (req, res, next) => {
  
 };

 exports.deleteTask = (req, res, next) => {
  
 }

