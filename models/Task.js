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
});
  Task.associate = (models) => {
    Task.belongsTo(models.User,{
      as: 'user',
      foreignKey: 'userId'
    });
    
    Task.hasMany(models.Todo,{
      as: 'todos',
      foreignKey: 'taskId'
    });
  };


module.exports = Task;
