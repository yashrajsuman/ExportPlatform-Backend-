const express = require('express');
const router = express.Router();
const ComplianceService = require('../services/complianceService'); // A service module for compliance logic

// Fetch country-specific compliance checklist
router.get('/checklist/:country', async (req, res) => {
    try {
        const { country } = req.params;
        const checklist = await ComplianceService.getCountryChecklist(country);
        res.json(checklist);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Verify compliance of a shipment
router.post('/verify', async (req, res) => {
    try {
        const { shipment_id } = req.body;
        const verificationResult = await ComplianceService.verifyShipmentCompliance(shipment_id);
        res.json(verificationResult);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Upload compliance-related document
router.post('/upload', async (req, res) => {
    try {
        const { shipment_id, type, description, file_path } = req.body;
        const document = await ComplianceService.uploadDocument(shipment_id, type, description, file_path);
        res.json(document);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Notify users about compliance updates
router.post('/notify', async (req, res) => {
    try {
        const { user_id, message } = req.body;
        await ComplianceService.sendNotification(user_id, message);
        res.json({ success: true, message: 'Notification sent successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
