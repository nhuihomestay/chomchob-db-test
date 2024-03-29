const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bundles', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      prodId: {
        type: DataTypes.INTEGER,
        field: 'prod_id'
      },
      bundleProdId: {
        type: DataTypes.INTEGER,
        field: 'bundle_prod_id'
      },
      bundlePrice: {
        type: DataTypes.FLOAT,
        field: 'bundle_price'
      },
      expireDate: {
        type: DataTypes.DATE,
        field: 'expire_date'
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bundles');
  },
};