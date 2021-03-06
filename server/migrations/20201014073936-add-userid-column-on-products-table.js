'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Products', 'UserId', {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'Users',
        },
        key: 'id',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Products', 'UserId', {})
  }
};
