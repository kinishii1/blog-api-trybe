const UserService = require('../services/UserService');
const { generateToken } = require('../utils/auth');

const addUser = async (req, res) => {
  const { displayName, email, password } = req.body;
  const user = await UserService.addUser(displayName, email, password);

  if (user.err) return res.status(user.err).json({ message: user.message });

  const token = generateToken({ displayName, email });

  return res.status(201).json({ token });
};

const getAllUsers = async (_req, res) => {
  const users = await UserService.getAllUsers();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await UserService.getUserById(id);

  if (user.err) return res.status(user.err).json({ message: user.message });

  return res.status(200).json(user);
};

const deleteUser = async (req, res) => {
  const { email } = req.user;
  const user = await UserService.deleteUser(email);

  if (user.err) return res.status(user.err).json({ message: user.message });

  return res.status(204).end();
};

module.exports = {
  deleteUser,
  getUserById,
  addUser,
  getAllUsers,
};