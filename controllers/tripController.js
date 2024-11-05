const Trip = require('../models/tripModel');

exports.createTrip = async(req, res) => {
    try {
        const trip = new Trip(req.body);
        await trip.save();
        res.status(201).json(trip);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getTrips = async(req, res) => {
    try {
        const trips = await Trip.find();
        res.json(trips);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Các hàm CRUD khác nếu cần