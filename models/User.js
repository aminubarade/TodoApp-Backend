const Sequelize = require("sequelize");
const sequelize = require("./../config/db");

const User = sequelize.define("users",{
      id: {
        type: Sequelize.INTEGER,
        autoincrement: true,
        allowNull: false,
        primaryKey: true,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      } 
});
User.associate = (models) => {
  User.hasMany(models.Task, {
    as: 'tasks',
    foreignKey: 'userId'
  });
  
  User.hasMany(models.Todo, {
    as: 'todos',
    foreignKey: 'userId'
  });
}


module.exports = User;
