const User = require('../models/userModel');

exports.createUser = async(req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getUsers = async(req, res) => {
    try {
        const users = await User.find().populate('trips');
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Các hàm CRUD khác nếu cần