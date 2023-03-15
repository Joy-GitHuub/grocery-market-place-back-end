const { createUserService, getAdminCheckService, getAllUserService, updateUserStatusService, deleteSingleUserService } = require("../Service/User.Service");

module.exports.createUser = async (req, res) => {
    try {
        const userInfo = await req.body;
        const result = await createUserService(userInfo);
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
};


module.exports.getAllUser = async (req, res) => {
    try {
        const result = await getAllUserService();
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
};


module.exports.getAdminCheck = async (req, res) => {
    try {
        const { email } = req.params;
        const result = await getAdminCheckService(email);

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
};


module.exports.updateUserStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = await updateUserStatusService(id, data);
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
};


module.exports.deleteSingleUser = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteSingleUserService(id);
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