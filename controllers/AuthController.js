const sequelize = require("../config/db");
const User = require("./../models/User");
//const userController = require("./../controllers/UserController");
const { json } = require("body-parser");


exports.login = (req, res, next) => {
sequelize
.sync()
.then(async () =>{
    user = await User.findOne(
      {
        where: {
          username: req.params.username,
          password: req.params.password
        }
      }
    )
    if(user.username === req.params.username || username.password === req.params.password){
      console.log('Logged in Successfully');
    }
})
    .catch(()=>{
  console.log("page not found");
    });
  
 };


 exports.register = (req, res, next) => {
  sequelize
  .sync()
  .then(async () =>{
      user = await User.findOne(
        {
          where: {
            username: req.params.username,
          }
        }
      )
      if(req.params.username === user.username){
        console.log('User Already Exist');
      }})
  .catch(()=>{
    console.log('Fill the forms');
  })
 }


//  function checkUser(username){
//   User.findOne({where: {username: username}})
//    .then((user) => 
//    { 
//      return user;
//    });
// }
