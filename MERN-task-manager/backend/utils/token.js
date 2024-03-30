const jwt = require("jsonwebtoken");


const createAccessToken = (payload) => {
  return jwt.sign(payload, "Rishikesh123456");
}

module.exports = {
  createAccessToken,
}