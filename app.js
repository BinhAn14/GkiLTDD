const express = require('express');
const mongoose = require('mongoose');
const tripRoutes = require('./routes/tripRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config(); // Load biến môi trường từ .env

const app = express();
app.use(express.json());

// Kết nối cơ sở dữ liệu MongoDB
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://an100277:AeeReISLciRp5Aqf@binhan.awftk.mongodb.net/tourService?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 30000, // Tăng thời gian chờ kết nối
        socketTimeoutMS: 30000, // Tăng thời gian chờ socket
    })
    .then(() => console.log('Kết nối cơ sở dữ liệu thành công'))
    .catch((error) => console.error('Lỗi kết nối cơ sở dữ liệu:', error));

// Sử dụng routes
app.use('/api/trips', tripRoutes);
app.use('/api/users', userRoutes);

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
});

module.exports = app;