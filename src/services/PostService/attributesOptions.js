const { Category, User } = require('../../models');

const attributesOptions = {
  include: [
    { model: Category, as: 'categories', through: { attributes: [] } },
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
  ],
};

module.exports = attributesOptions;