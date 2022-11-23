const {Sequelize, DataType} = require('sequelize');

const sequelize = new Sequelize("cabexpress","root","Experion@123",{
 host:"localhost",
 dialect:"mysql"
 
});

module.exports.sequelize=sequelize;