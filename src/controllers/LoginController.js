const LoginService = require('../services/LoginService');
const { generateToken } = require('../utils/auth');

const login = async (req, res) => {
  const { email, password } = req.body;
  const isAuth = await LoginService.auth(email, password);

  if (!isAuth) return res.status(400).json({ message: 'Invalid fields' });

  const token = generateToken({ email });
  return res.status(200).json({ token });
};
module.exports = { login };