const jwt = require("jsonwebtoken")

const generateToken = (id) => {
    return jwt.sign({ _id: id }, process.env.JWTSECRET, { expiresIn: '365d' })
};

module.exports = generateToken;