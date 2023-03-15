const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');

const app = require('./index');


// Database Connection
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
    console.log(`Database Connection is Successful`.red.bold);
});

const port = 5000 || 8080;

app.listen(port, () => {
    console.log(`App is running on port ${port}`.yellow.bold);
});