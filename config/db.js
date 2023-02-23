const Sequelize = require("sequelize");

const sequelize = new Sequelize("todoApp", "root","root",{

  host: "localhost",
  port: 8889,
  dialect: "mysql"



})


// const mysql = require('mysql');
// const conn = mysql.createConnection({
//  host: "localhost",
//  user: "root",
//  password: "root",
//  database: "todoApp",
//  port: 8889
// });

// conn.connect();

module.exports = sequelize;
