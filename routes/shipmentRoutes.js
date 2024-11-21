// routes/shipmentRoutes.js
const express = require('express');
const Shipment = require('../models/Shipment');
const router = express.Router();

// Create a shipment
router.post('/shipments', async (req, res) => {
    try {
        const shipment = await Shipment.create(req.body);
        res.status(201).json(shipment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Fetch all shipments
router.get('/shipments', async (req, res) => {
    try {
        const shipments = await Shipment.findAll();
        res.status(200).json(shipments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update shipment status
router.put('/shipments/:id', async (req, res) => {
    try {
        const shipment = await Shipment.findByPk(req.params.id);
        if (!shipment) return res.status(404).json({ error: 'Shipment not found' });
        await shipment.update(req.body);
        res.status(200).json(shipment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a shipment
router.delete('/shipments/:id', async (req, res) => {
    try {
        const shipment = await Shipment.findByPk(req.params.id);
        if (!shipment) return res.status(404).json({ error: 'Shipment not found' });
        await shipment.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;


// routes/shipmentRoutes.js
//const express = require('express');
const { fetchRates, checkAvailability } = require('../utils/externalCarrierAPI');
//const router = express.Router();

// Fetch carrier rates
router.post('/shipment/rates', async (req, res) => {
    try {
        const rates = await fetchRates(req.body); // Pass shipment details
        res.status(200).json(rates);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Check carrier availability
router.post('/shipment/availability', async (req, res) => {
    try {
        const { carrierName, shipmentDetails } = req.body;
        const available = await checkAvailability(carrierName, shipmentDetails);
        res.status(200).json({ carrierName, available });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
