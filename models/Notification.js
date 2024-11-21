// models/Notification.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Assuming you're using Sequelize to manage your database

const Notification = sequelize.define('Notification', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,  // Assuming each notification is linked to a user
        references: {
            model: 'Users', // Make sure you have a 'Users' table for user_id reference
            key: 'id',
        },
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING, // "read", "unread"
        defaultValue: 'unread',
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

// Sync the Notification model to the database
Notification.sync().then(() => {
    console.log("Notification table has been created.");
});

module.exports = Notification;
