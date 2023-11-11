const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      prodName: {
        type: DataTypes.STRING,
        field: 'prod_name'
      },
      prodDetail: {
        type: DataTypes.TEXT,
        field: 'prod_detail'
      },
      prodPrice: {
        type: DataTypes.FLOAT,
        field: 'prod_price',
        allowNull: false
      },
      openSaleDate: {
        type: DataTypes.DATEONLY,
        field: 'open_sale_date'
      },
      endSaleDate: {
        type: DataTypes.DATEONLY,
        field: 'end_sale_date'
      },
      discountStartDate: {
        type: DataTypes.DATEONLY,
        field: 'discount_start_date'
      },
      discountEndDate: {
        type: DataTypes.DATEONLY,
        field: 'discount_end_date'
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
    await queryInterface.dropTable('products');
  },
};