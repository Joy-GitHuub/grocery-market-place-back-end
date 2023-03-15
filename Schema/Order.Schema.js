const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    orderID: {
        type: Number,
        required: [true, 'Order Id is Required'],
    },
    userInfo: [
        { userName: String, userEmail: String }
    ],
    orderProduct: [{
        _id: String,
        name: String,
        price: Number,
        discountPrice: Number,
        quantity: Number,
        orderStatus: {
            type: String,
            default: 'pending',
            enum: {
                values: ['pending', 'shipping', 'canceled', 'failed', 'On Hold', 'Pending Payment', 'Processing', 'Refunded', 'Out-Of-Stock'],
                message: `{VALUE} please Provide this`
            },
        },
    }],
    totalPrice: Number,

    status: {
        type: String,
        default: 'Pending',
        enum: {
            values: ['Pending', 'Shipping', 'Delivery', 'Canceled', 'Failed', 'On-Hold', 'Pending Payment', 'Processing', 'Refunded', 'Out-Of-Stock'],
            message: `{VALUE} please Provide this`
        }
    },
    billingAddress: {},
    shippingAddress: {},
    paymentMethods: {},
    date: String,
}, { timestamps: true, });

const order = mongoose.model('Orders', OrderSchema);

module.exports = order;