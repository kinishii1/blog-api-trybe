const { User } = require('../models');

const addUser = async (displayName, email, password) => {
  const alreadyExists = await User.findOne({ where: { email } });

  if (alreadyExists) return { err: 409, message: 'User already registered' };

  const user = await User.create({ displayName, email, password });
  return user;
};

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  if (!user) return { err: 404, message: 'User does not exist' };

  return user;
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });

  if (!user) return { err: 404, message: 'User does not exist' };

  return user;
};

const deleteUser = async (email) => {
  const user = await User.destroy({ where: { email } });

  if (!user) return { err: 404, message: 'User does not exist' };

  return user;
};

module.exports = {
  deleteUser,
  getUserByEmail,
  getUserById,
  addUser,
  getAllUsers,
};