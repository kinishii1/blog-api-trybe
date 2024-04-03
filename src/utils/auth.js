const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'suaSenhaSecreta';

const generateToken = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });

  return token;
};

const verifyToken = (token) => {
  const decoded = jwt.verify(token, JWT_SECRET);
  return decoded;
};

module.exports = {
  verifyToken,
  generateToken,
};