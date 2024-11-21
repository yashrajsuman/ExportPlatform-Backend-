const express = require('express');
const multer = require('multer');
const router = express.Router();
const Document = require('../models/Document');
const Shipment = require('../models/Shipment');

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads'); // Save files to "uploads" folder
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Unique file name
    },
});
const upload = multer({ storage });

// Upload a document
router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const { shipment_id, type, description } = req.body;
        const file_name = req.file.originalname;
        const file_path = req.file.path;

        // Ensure the shipment exists
        const shipment = await Shipment.findByPk(shipment_id);
        if (!shipment) return res.status(404).json({ error: 'Shipment not found' });

        const document = await Document.create({ shipment_id, file_name, file_path, type, description });
        res.json(document);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all documents for a shipment
router.get('/:shipment_id', async (req, res) => {
    try {
        const { shipment_id } = req.params;
        const documents = await Document.findAll({ where: { shipment_id } });
        res.json(documents);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a document's metadata
router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { type, description } = req.body;

        const document = await Document.findByPk(id);
        if (!document) return res.status(404).json({ error: 'Document not found' });

        await document.update({ type, description });
        res.json(document);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a document
router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const document = await Document.findByPk(id);
        if (!document) return res.status(404).json({ error: 'Document not found' });

        await document.destroy();
        res.json({ message: 'Document deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
