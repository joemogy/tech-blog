const { Model, DataTypes } = require('sequelize');

const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class User extends Model { }

User.init({
    id:{
        type:DataTypes.INTEGER
        primaryKey: true,
        autoIncrement:true,
        allowNull:false
    },
    userName:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            min:6
        }
    },
    password:{
        type:DataTypes.STRING
        allowNull:false,
        validate:{
            min:6
        }
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
)

module.exports = User;
