
var models = require('../models/sequelize');
const { hash, compare } = require("bcryptjs");
const {Sequelize,Model}=require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phoneno: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      jwt:{
        type: DataTypes.STRING(1234),
        allowNull:true
      }
  });
  return Admin;
};