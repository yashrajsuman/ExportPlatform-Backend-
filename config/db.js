const { Sequelize } = require('sequelize');

// Initialize Sequelize instance
const sequelize = new Sequelize('export_platform', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
