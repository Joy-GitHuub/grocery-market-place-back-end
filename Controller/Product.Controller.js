const { createProductService, getProductService, getSingleProductService, updateSingleProductService, getBestSellProductService, getOnSellProductService } = require("../Service/Product.Service");

module.exports.createProduct = async (req, res) => {
    try {
        const product = await createProductService(req.body);
        res.status(200).json({
            statusbar: true,
            data: product,
            message: 'Successfully Product Insert',
        });
    } catch (error) {
        res.status(400).json({
            statusbar: false,
            message: error.message,
        });
    };
};

module.exports.getProduct = async (req, res) => {
    try {

        let filters = { ...req.query };

        //sort , page , limit -> exclude
        const excludeFields = ['sort', 'page', 'limit']
        excludeFields.forEach(field => delete filters[field])

        //gt ,lt ,gte .lte
        let filtersString = JSON.stringify(filters)
        filtersString = filtersString.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)

        filters = JSON.parse(filtersString)



        const queries = {}

        if (req.query.sort) {
            queries.sortBy = req.query.sort.split(',').join(' ');
        };
        if (req.query.fields) {
            queries.fields = req.query.fields.split(',').join(' ');
        };
        if (req.query.page) {
            const { page = 1, limit = 10 } = req.query;
            const skip = (page - 1) * parseInt(limit);
            queries.skip = skip;
            queries.limit = parseInt(limit);
        };
        const products = await getProductService(filters, queries);
        res.status(200).json({
            statusbar: true,
            message: 'Successfully Get',
            data: products,
        })

    } catch (error) {
        res.status(400).json({
            statusbar: false,
            message: error.message,
        });
    }
};

module.exports.getSingleProduct = async (req, res) => {
    try {

        const { id } = req.params;
        const product = await getSingleProductService(id);
        res.status(200).json({
            statusbar: true,
            message: 'Successfully Get Single Product',
            data: product,
        })

    } catch (error) {
        res.status(400).json({
            statusbar: false,
            message: error.message,
        });
    };
};

module.exports.getBestSellProduct = async (req, res) => {
    try {
        const result = await getBestSellProductService();
        res.status(200).json({
            statusbar: true,
            message: 'Successfully Get Best Sell Product',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            statusbar: false,
            message: error.message,
        });
    }
};

module.exports.getOnSellProduct = async (req, res) => {
    try {
        const result = await getOnSellProductService();
        res.status(200).json({
            statusbar: true,
            message: 'Successfully Get On-Sell Product',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            statusbar: false,
            message: error.message,
        });
    }
}

module.exports.updateSingleProduct = async (req, res) => {
    try {
        console.log(req.body);
        const result = await updateSingleProductService(req.body);
        res.status(200).json({
            statusbar: true,
            message: 'Successfully Update Product',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            statusbar: false,
            message: error.message,
        });
    }
};