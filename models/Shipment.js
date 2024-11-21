// models/Shipment.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Shipment = sequelize.define('Shipment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING, // e.g., "Air", "Sea", "Ground"
        allowNull: false,
    },
    carrier_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Carriers',
            key: 'id',
        },
    },
    status: {
        type: DataTypes.STRING, // e.g., "Pending", "In Transit", "Delivered"
        defaultValue: 'Pending',
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

module.exports = Shipment;
