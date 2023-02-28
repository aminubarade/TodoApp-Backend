const sequelize = require("../config/db");
//const Todo = require("./../models/Todo");
//const Task = require("./../models/Task");
const User = require("./../models/User");
const { json } = require("body-parser");

// User.hasMany(Todo);
// User.hasMany(Task);

exports.getAllUsers = (req, res, next) => {
  sequelize
  .sync()
  .then(async () => {
    const users = await User.findAll();
    res.status(200).json(users);
  })
  .catch(()=>{
    res.status(404).json({
      status:"Error",
      message: "not available"
    })
  }
  )
 };

 exports.createUser = (req, res, next) => {
  sequelize
  .sync()
  .then(()=> {
    User.create({
      id: req.body.id,
      firstName: req.body.firstname,
      lastName: req.body.lastname,
      email: req.body.email
  })
  res.status(200).json({
    status: "success",
    message: "User Registered"
  })
})
.catch(()=>{
    res.status(404).json({
      status: "error",
      message: "User not created"
    })
  })
 };

 exports.getUser = (req, res, next) => {
  sequelize
  .sync()
  .then(async () => {
    const user = await User.findAll(
      {
        where: {
          id: req.params.id
        }
      }
    );
    res.status(200).json(user);
  })
  .catch(()=> {
    res.status(404).json({
      status: "Failed",
      message: "Not available"
    })
  })
  
 };

 exports.updateUser = (req, res, next) => {
  
 };

 exports.deleteUser = (req, res, next) => {
  sequelize
  .sync()
  .then(async () => {
    User.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    );
    res.status(200).json({
      status: "success",
      message: "User Deleted"
    });
  })
  .catch(()=> {
    res.status(404).json({
      status: "Failed",
      message: "Could not Delete"
    })
  })
 }

