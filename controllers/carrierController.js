const fetchCarriers = async (req, res) => {
    try {
        const carriers = [
            { id: 1, name: 'FedEx', type: 'Air' },
            { id: 2, name: 'DHL', type: 'Ground' }
        ];
        res.status(200).json(carriers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { fetchCarriers };
