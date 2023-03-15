const mongoose = require('mongoose');

const ViewCountSchema = mongoose.Schema({
    date: {
        type: String,
        required: [true, 'Date Required'],
    },
    count: {
        type: Number,
        default: 1,
    }
}, { timestamps: true, });

const viewCount = mongoose.model('ViewCount', ViewCountSchema);

module.exports = viewCount;