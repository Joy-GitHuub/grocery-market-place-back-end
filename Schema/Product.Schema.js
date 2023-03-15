const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please Provide a Product Name"],
        minLength: [3, "Please Provide a Valid Name"],
        maxLength: [100, "Please Provide a Short  Name"],
        unique: [true, 'Please Provide a Unique Product Name'],
    },

    description: {
        type: String,
        required: [true, 'Please Provide this Product Description'],
    },

    shortDescription: {
        type: String,
        required: [true, "Please Provide a Short Description"],
    },

    price: {
        type: Number,
        min: [1, "Please Provide a valid Price"],
        required: [true, 'Please Provide Price on this Product'],
    },

    discountPrice: {
        type: Number,
        default: 0,
    },

    status: {
        type: String,
        default: 'in-stock',
        enum: {
            values: ['in-stock', 'out-of-stock', 'sold-out'],
            message: `{VALUE} please Provide this`
        },
    },

    stock: {
        type: Number,
        min: [0, "Please Provide a Valid Stock Number"],
        required: [true, "Please Provide Your Product Stock Number"],
    },

    features: [{
        type: String,
        required: [true, 'Please Provide your Product Features'],
    }],

    review: [{
        type: String,
    }],

    category: {
        type: String,
        required: [true, 'Please Provide a Category Name']
    },

    brand: {
        type: String,
        required: [true, 'Please Provide a brand name your Product'],
    },

    imageURL: [{
        type: String,
        required: true,
    }],

    unit: {
        type: String,
        required: true,
        enum: {
            values: ["kg", "litre", "pcs", "bag"],
            message: "unit value can't be {VALUE}, must be kg/litre/pcs/bag"
        }
    },

    seller: [{

    }],

    order: {
        type: Number,
        min: [0, 'Please Order Start Min-0'],
        default: 0,
    },

    tags: {
        type: String,
        default: 'Best Seller',
    },

    additionalInformation: [{
        weight: {
            type: String,
            required: [true, 'Please Provide Weight'],
        },
        color: {
            type: String,
            default: 'Black, Blue, Brown',
        },
        dimensions: {
            type: String,
            required: [true, "Please Provide a Dimensions"],
        },
    }],

    view: {
        type: Number,
        default: 0
    }



}, { timestamps: true, });

const product = mongoose.model('Products', productSchema);

module.exports = product;