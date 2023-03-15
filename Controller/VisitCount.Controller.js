const { visitCountService } = require("../Service/VisitCount.Service");

module.exports.visitCount = async (req, res) => {
    try {
        const result = await visitCountService(req.body);

        res.status(200).json({
            statusbar: true,
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            statusbar: false,
            error: error.message,
        });
    }
}