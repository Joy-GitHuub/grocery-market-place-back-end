const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');


mongoose.set('strictQuery', false)

// const db = `mongodb+srv://watch-me-project:watch-me-project@cluster0.garvawt.mongodb.net/?retryWrites=true&w=majority`;
// const db = `mongodb+srv://Market_Place:Market_Place@cluster0.s4ariea.mongodb.net/?retryWrites=true&w=majority`;
/* 
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
} */
// mongoose.connect(db).then(() => {
//     console.log(`Watch-ME Database Connection is Successful`.green.bold);
// });
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