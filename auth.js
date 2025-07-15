// auth.js
const jwt = require("jsonwebtoken");

const SECRET = "your-secret-key"; // 👈 Keep secret safe in env vars

function generateToken(userId) {
  return jwt.sign({ id: userId }, SECRET, { expiresIn: '1h' });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    return null;
  }
}

module.exports = { generateToken, verifyToken };
