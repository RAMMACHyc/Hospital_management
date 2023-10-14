const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const User = sequelize.define('User', {
    email: {
    type: DataTypes.STRING
    },
    password: {
    type: DataTypes.STRING
    },
    
},{
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'User'
    
});

module.exports = User;
