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
          password: req.body.password
        }
      }
    )
    if(user.username || username.password){
      req.session.user = user;
      req.session.authorized = true;
      return true;
      console.log('Logged in Successfully');
      //redirect
    }
})
    .catch(()=>{
      console.log("Unable to login");
      return false;
    });
  
 };

 exports.logout = (req, res, next) => {
       req.session.destroy();
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
        console.log('User Already Exist: Redirect');
      }}).then(()=> {
        User.create({
          id: req.body.id,
          username: req.params.username,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          password: req.body.password
      })
      res.status(200).json({
        status: "success",
        message: "User Registered"
      })
    })
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
