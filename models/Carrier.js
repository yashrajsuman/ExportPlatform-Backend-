// models/Carrier.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Carrier = sequelize.define('Carrier', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING, // e.g., "Air", "Sea", "Ground"
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = Carrier;
