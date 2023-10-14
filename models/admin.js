const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Admin = sequelize.define('admins', {
    first_name: {
    type: DataTypes.STRING,
    // allowNull: false
    },
    last_name: {
    type: DataTypes.STRING
    },
    picture: {
    type: DataTypes.STRING
    },
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
    tableName: 'admins',
    createdAt:'created_on',
    updatedAt:'updated_on'
});

module.exports = Admin;
