'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts_categories', {

      postId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'blog_posts',
          key: 'id',
        },
        field: 'post_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },

      categoryId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'categories',
          key: 'id'
        },
        field: 'category_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts_categories');
  }
};