const express = require('express');
const sequelize = require('./config/db');
const carrierRoutes = require('./routes/carrierRoutes');
const shipmentRoutes = require('./routes/shipmentRoutes');
const documentRoutes = require('./routes/documentRoutes');
const complianceRoutes = require('./routes/complianceRoutes');
const notificationRoutes = require('./routes/notification');

const app = express();
app.use(express.json());

// Carrier routes
app.use('/api', carrierRoutes);
app.use('/api', shipmentRoutes);
app.use('/documents', documentRoutes);
app.use('/compliance', complianceRoutes);
app.use('/notifications', notificationRoutes);

// Sync database and start server
sequelize.sync()
    .then(() => {
        console.log('Database synced');
        app.listen(3000, () => console.log('Server running on port 3000'));
    })
    .catch(console.error);
