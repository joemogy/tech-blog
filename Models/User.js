const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/connection');
const bcrypt = require('bcrypt')

class User extends Model {
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
            }
        }
    },

    {
        hooks: {
            async beforeCreate(userData) {
                userData.password = await bcrypt.hash(userData.password, 10);
                return userData
            },
            async beforeUpdate(userData) {
                userData.password = await bcrypt.hash(userData.password, 10);
                return userData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',

       
    },

    
        
    
);

module.exports = User;
