//const conn = require("../config/db");
const Todo = require("./../models/Todo");
const Task = require("./../models/Task");
const User = require("./../models/User");

User.hasMany(Todo);
User.hasMany(Task);

exports.getAllUsers = (req, res, next) => {
  res.status(200).json(User.findAll());
 };

 exports.createUser = (req, res, next) => {
  
 };

 exports.getUser = (req, res, next) => {
  
 };

 exports.updateUser = (req, res, next) => {
  
 };

 exports.deleteUser = (req, res, next) => {
  
 }

