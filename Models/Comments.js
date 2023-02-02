const { Model, DataTypes } = require('sequelize');

const sequelize = require('../Config/connection.js');

class Comment extends Model { }

Comment.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull:false
    },
    commentContent:{
        type:DataTypes.STRING,
        allowNull:false
    },
    UserName_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
          model: 'user',
          key:'id'  
        }
    },
    blog_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'blog',
            key:'id'
        }
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
)

module.exports = Comment;
