const { createOrderService, getOrderService, getSingleUserOrderService, getViewOrderService, updateOrderStatusService } = require("../Service/Order.Service");

module.exports.createOrder = async (req, res) => {
    try {
        const result = await createOrderService(req.body);
        res.status(200).json({
            statusbar: true,
            data: result,
        })

    } catch (error) {
        res.status(400).json({
            statusbar: false,
            error: error.message,
        })
    }
};


module.exports.getOrder = async (req, res) => {
    try {
        const queries = {};
        let filters = { ...req.query };
        //gt ,lt ,gte .lte
        let filtersString = JSON.stringify(filters)
        filtersString = filtersString.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)

        filters = JSON.parse(filtersString);
        const weekValue = (Object.values(filters)[0]);
        console.log(filters);
        if (req.query.status) {
            queries.status = req.query.status
        }
        if (req.query.date) {
            queries.date = req.query.date;
        }
        if (req.query.weekMonth) {
            queries.date = weekValue;
        }

        const result = await getOrderService(queries);
        res.status(200).json({
            statusbar: true,
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            statusbar: false,
            error: error.message,
        })
    }
};

module.exports.getSingleUserOrder = async (req, res) => {
    try {
        const { email } = req.params;
        // if (req.decodedUserEmail === email) {
        const result = await getSingleUserOrderService(email);

        res.status(200).json({
            statusbar: true,
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            statusbar: false,
            error: error.message,
        })
    }
};
module.exports.getViewOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await getViewOrderService(id);
        res.status(200).json({
            statusbar: true,
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            statusbar: false,
            error: error.message,
        })
    }
};


module.exports.updateOrderStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = await updateOrderStatusService(id, data);

        res.status(200).json({
            statusbar: true,
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            statusbar: false,
            error: error.message,
        })
    }
};

