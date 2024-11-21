// routes/carrierRoutes.js
const express = require('express');
const Carrier = require('../models/Carrier');
const router = express.Router();

// Add a new carrier
router.post('/carriers', async (req, res) => {
    try {
        const { name, type } = req.body;
        const carrier = await Carrier.create({ name, type });
        res.status(201).json(carrier);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Fetch all carriers
router.get('/carriers', async (req, res) => {
    try {
        const carriers = await Carrier.findAll();
        res.status(200).json(carriers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Fetch a specific carrier by ID
router.get('/carriers/:id', async (req, res) => {
    try {
        const carrier = await Carrier.findByPk(req.params.id);
        if (!carrier) return res.status(404).json({ error: 'Carrier not found' });
        res.status(200).json(carrier);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a carrier
router.put('/carriers/:id', async (req, res) => {
    try {
        const { name, type } = req.body;
        const carrier = await Carrier.findByPk(req.params.id);
        if (!carrier) return res.status(404).json({ error: 'Carrier not found' });
        await carrier.update({ name, type });
        res.status(200).json(carrier);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a carrier
router.delete('/carriers/:id', async (req, res) => {
    try {
        const carrier = await Carrier.findByPk(req.params.id);
        if (!carrier) return res.status(404).json({ error: 'Carrier not found' });
        await carrier.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
