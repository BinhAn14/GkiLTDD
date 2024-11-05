const express = require('express');
const tripController = require('../controllers/tripController');
const router = express.Router();

router.post('/', tripController.createTrip);
router.get('/', tripController.getTrips);

// Các route khác nếu cần

module.exports = router;