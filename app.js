const express = require('express');
const mongoose = require('mongoose');
const tripRoutes = require('./routes/tripRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());

// Kết nối cơ sở dữ liệu MongoDB
mongoose.connect('mongodb+srv://an100277:AeeReISLciRp5Aqf@binhan.awftk.mongodb.net/tourService?retryWrites=true&w=majority&appName=binhan', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Kết nối cơ sở dữ liệu thành công'))
    .catch((error) => console.error('Lỗi kết nối cơ sở dữ liệu:', error));

// Sử dụng routes
app.use('/api/trips', tripRoutes);
app.use('/api/users', userRoutes);

// Khởi động server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
});

module.exports = app;