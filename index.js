const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');


mongoose.set('strictQuery', false)

mongoose.connect(process.env.DB).then(() => {
    console.log(`MARKET-PLACE Database Connection is Successful`.green.bold);
});



const port = 5000 || 8080;

app.listen(port, () => {
    console.log(`App is running on port ${port}`.yellow.bold);
});


// Middleware
app.use(express.json())
app.use(cors());
// app.use(express.static('images'));


// Router USE
const productRoute = require('./Router/Product.Router');
const orderRoute = require('./Router/Order.Router');
const userRoute = require('./Router/User.Router');
const visitCountRoute = require('./Router/VisitCount.Router');

// Route Call
app.use('/api/v1/product', productRoute);
app.use('/api/v1/order', orderRoute);
app.use('/api/v1/user', userRoute);
app.use('/api/v1/visit', visitCountRoute);


app.get('/', (req, res) => {
    res.status(200)
        .json({
            statusbar: true,
            message: 'Node.JS Server Working is Perfect',
        });
});

module.exports = app;