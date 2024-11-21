const Document = require('../models/Document');
const Notification = require('../models/Notification'); // Example notification model

const ComplianceService = {
    async getCountryChecklist(country) {
        // Example: Fetch country-specific compliance checklist
        const checklists = {
            USA: ['Invoice', 'Bill of Lading', 'Phytosanitary Certificate'],
            EU: ['Invoice', 'Certificate of Origin', 'Customs Declaration'],
        };
        return checklists[country] || [];
    },

    async verifyShipmentCompliance(shipment_id) {
        // Example: Verify if shipment documents meet compliance
        const requiredDocs = ['Invoice', 'Bill of Lading', 'Certificate of Origin'];
        const uploadedDocs = await Document.findAll({ where: { shipment_id } });

        const missingDocs = requiredDocs.filter(doc => 
            !uploadedDocs.some(uploaded => uploaded.type === doc)
        );

        if (missingDocs.length > 0) {
            return { success: false, missing: missingDocs };
        }
        return { success: true, message: 'Shipment complies with all requirements.' };
    },

    async uploadDocument(shipment_id, type, description, file_path) {
        // Save compliance-related document to the database
        return await Document.create({ shipment_id, type, description, file_path });
    },

    async sendNotification(user_id, message) {
        // Example: Notify the user about compliance issues or updates
        await Notification.create({ user_id, message });
    },
};

module.exports = ComplianceService;
