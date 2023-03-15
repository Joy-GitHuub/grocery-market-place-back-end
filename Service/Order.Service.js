const Order = require('../Schema/Order.Schema');
const Product = require('../Schema/Product.Schema');
const User = require('../Schema/User.Schema');


module.exports.createOrderService = async (orderInfo) => {
    const order = await new Order(orderInfo);
    const result = await order.save();

    const { orderProduct, userInfo, _id } = result;
    for (const product of orderProduct) {
        const update = await Product.updateOne({ _id: product.id }, { $inc: { order: +product.quantity } })
    };
    const res = await User.updateOne(
        { userEmail: result.userInfo[0].userEmail },
        { $push: { order: _id } }
    );
    console.log(res);
    return result;
}

module.exports.getOrderService = async (query) => {
    console.log(query);
    const order = await Order.find(query).select('orderProduct _id date totalPrice status')
    return order;
};

module.exports.getSingleUserOrderService = async (email) => {
    const order = await Order.find({ "userInfo.userEmail": email })
    return order;
};

module.exports.getViewOrderService = async (id) => {
    const order = await Order.findOne({ _id: id });
    return order;
};

module.exports.updateOrderStatusService = async (id, updateData) => {
    const result = await Order.updateOne({ _id: id }, { $set: updateData }, { runValidators: true });
    return result;
}