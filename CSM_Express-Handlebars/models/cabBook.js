const sequelize = require('./db');
const {DataTypes} = require('sequelize');



const cabBook = sequelize.define('cabBook',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true

    },
    pickup:{
        type:DataTypes.STRING(15),
        allowNull:null,
        
    },
    destination:{
        type:DataTypes.STRING(16),
        allowNull:null

    },
    dot:{
        type:DataTypes.DATE,
        allowNull:null

    },
    passenger:{
        type:DataTypes.STRING(20),
        allowNull:false,
       

    },
    mobile:{
        type:DataTypes.STRING(12),
        allowNull:false,
        unique:true

    }
    

});

module.exports = cabBook;

