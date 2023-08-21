const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const MyTodo = sequelize.define('mytodo',{
    todo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false, // Default value should be false
  },
},{
    timestamps:false
});



module.exports = MyTodo;
