const admin = require("firebase-admin");
const serviceAccount = require("../keyFile.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


module.exports = async (req, res, next) => {
    try {
        const token = req.headers?.authorization?.split(" ")?.[1];

        const decode = await admin.auth().verifyIdToken(token);
        req.decodedUserEmail = decode.email;

        next();
    } catch (error) {
        res.status(403).json({
            status: "fail",
            error: "Invalid token"
        });
    }
};