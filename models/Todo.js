const Sequelize = require("sequelize");
const sequelize = require("./../config/db");

const Todo = sequelize.define("todos",{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
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

Todo.associate = (models) => {
  Todo.belongsTo(models.Task,{
    as: 'task',
    foreignKey: 'taskId'
  });

  Todo.belongsTo(models.User,{
    as: 'user',
    foreignKey: 'userId'
  });
};


module.exports = Todo;
