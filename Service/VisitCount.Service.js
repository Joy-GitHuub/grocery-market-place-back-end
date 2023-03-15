const VisitCount = require('../Schema/VisiteCount.Schema');

module.exports.visitCountService = async (data) => {
    const date = data.date;
    const view = data.count;
    const result = await VisitCount.updateOne({ date: date }, { $inc: { count: view } }, { upsert: true })
    return result;
};