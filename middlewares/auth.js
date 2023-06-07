const auth = require("../controllers/AuthController");

exports.isAuthorized = (req, res, next) => {
    if(auth.login){
      return true
    }
    else {
      return false;
    }
};
