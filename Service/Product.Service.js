const Product = require('../Schema/Product.Schema');


module.exports.createProductService = async (productInfo) => {
    const product = await new Product(productInfo);
    const result = await product.save();
    return result;
};

module.exports.getProductService = async (filters, dataQuery) => {
    const product = await Product.find(filters)
        .sort(dataQuery.sortBy)
        .select(dataQuery.fields)
        .skip(dataQuery.skip)
        .limit(dataQuery.limit);

    const totalProduct = await Product.find({}).count();
    const page = Math.ceil(totalProduct / dataQuery.limit);
    return product;
};

module.exports.getSingleProductService = async (id) => {
    const product = await Product.find({ _id: id });
    const updateView = await Product.updateOne({ _id: id }, { $inc: { view: 1 } })
    return product;
};

module.exports.getBestSellProductService = async () => {
    const product = await Product.find({})
        .sort({ order: -1 }).limit(6)
    return product;
}

module.exports.getOnSellProductService = async () => {
    const product = await Product.find({})
        .sort({ stock: -1 }).limit(6)
    return product;
}

module.exports.updateSingleProductService = async (updateData) => {
    const result = await Product.updateOne({ _id: updateData.id }, { $set: updateData.data }, {
        runValidators: true,
    });
    return result;
}