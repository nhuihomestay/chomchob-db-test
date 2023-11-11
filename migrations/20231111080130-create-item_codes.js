const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('item_codes', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      ownBy: {
        type: DataTypes.INTEGER,
        field: 'own_by'
      },
      prodId: {
        type: DataTypes.INTEGER,
        field: 'prod_id'
      },
      isRedeem: {
        type: DataTypes.BOOLEAN,
        field: 'is_redeem'
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
      },
      customerId: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'customer_id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('item_codes');
  },
};