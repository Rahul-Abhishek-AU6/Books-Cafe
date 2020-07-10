
var models = require('../models/sequelize');
const { hash, compare } = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    phoneno: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address:{
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  
  return User;
};