const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/connection.js');

class Blog extends Model { }

Blog.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement:true,
        allowNull:false
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    content:{
        type: DataTypes.STRING,
        allowNull:false
    },
    UserName_id:{
        type:DataTypes.INTEGER,
        allowNull:true,
        references:{
          model: 'user',
          key:'id'  
        }
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
  }
)

module.exports = Blog;
