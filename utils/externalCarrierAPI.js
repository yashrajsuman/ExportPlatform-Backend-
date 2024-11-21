// utils/externalCarrierAPI.js
const fetchRates = async (shipmentDetails) => {
    // Simulated API response
    const rates = [
        { carrier: 'DHL Express', type: 'Air', rate: 500 },
        { carrier: 'FedEx', type: 'Ground', rate: 300 },
        { carrier: 'Maersk', type: 'Sea', rate: 200 },
    ];
    return rates.filter(rate => rate.type === shipmentDetails.type);
};

const checkAvailability = async (carrierName, shipmentDetails) => {
    // Simulated API response
    const availability = {
        DHL: true,
        FedEx: true,
        Maersk: false,
    };
    return availability[carrierName] ?? false;
};

module.exports = { fetchRates, checkAvailability };
