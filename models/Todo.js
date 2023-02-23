const Sequelize = require("sequelize");
const sequelize = require("./../config/db");

const Todo = sequelize.define("todos",{
      id: {
        type: Sequelize.INTEGER,
        autoincrement: true,
        allowNull: false,
        primaryKey: true,
      },
      todo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.SMALLINT,
        allowNull: true,
      } 
});


module.exports = Todo;
