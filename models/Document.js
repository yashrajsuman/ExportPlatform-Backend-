const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Document = sequelize.define('Document', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    shipment_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Shipments',
            key: 'id',
        },
    },
    file_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    file_path: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING, // e.g., "Invoice", "Certificate"
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = Document;
