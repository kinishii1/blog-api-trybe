/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }
  } , {
    tableName: 'posts_categories',
    timestamps: false,
    underscored: true,
  });

  PostCategory.associate = ({Category, BlogPost}) => {
    BlogPost.belongsToMany(Category, {
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'categories',
    });

    Category.belongsToMany(BlogPost, {
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'posts',
    });
  }
  
  return PostCategory;
};