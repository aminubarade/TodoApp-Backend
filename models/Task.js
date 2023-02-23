const Sequelize = require("sequelize");
const sequelize = require("./../config/db");

const Task = sequelize.define("tasks",{
      id: {
        type: Sequelize.INTEGER,
        autoincrement: true,
        allowNull: false,
        primaryKey: true,
      },
      task: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: true,
      } 
})


module.exports = Task;
