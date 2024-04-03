/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  } , {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });

  User.associate = function({BlogPost}) {
    User.hasMany(BlogPost, {
      foreignKey: 'userId',
      as: 'posts'
    });
  }
  return User;
};