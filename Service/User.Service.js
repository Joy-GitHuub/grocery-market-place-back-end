const User = require('../Schema/User.Schema');

module.exports.createUserService = async (userInfo) => {
    const user = await new User(userInfo);
    const result = await user.save();
    return result;
};

module.exports.getAllUserService = async () => {
    const user = await User.find({}).populate('order')
    return user;
}

module.exports.getAdminCheckService = async (email) => {
    const admin = await User.findOne({ userEmail: email });
    return admin;
};


module.exports.updateUserStatusService = async (id, data) => {
    const result = await User.updateOne({ _id: id }, { $set: data }, { runValidators: true });
    return result;
};


module.exports.deleteSingleUserService = async (id) => {
    const result = await User.deleteOne({ _id: id });
    return result;
}