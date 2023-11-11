const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('promotions', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      discountPercentage: {
        type: DataTypes.FLOAT,
        field: 'discount_percentage'
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
      },
      promoProdId: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'promo_prod_id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('promotions');
  },
};