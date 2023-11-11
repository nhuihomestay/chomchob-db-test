const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('bundles', {
      fields: ['prod_id'],
      type: 'foreign key',
      name: 'bundles_prod_id_fkey',
      references: {
        table: 'products',
        field: 'id'
      }
    })
    
    await queryInterface.addConstraint('bundles', {
      fields: ['bundle_prod_id'],
      type: 'foreign key',
      name: 'bundles_bundle_prod_id_fkey',
      references: {
        table: 'products',
        field: 'id'
      }
    })
    
    await queryInterface.addConstraint('item_codes', {
      fields: ['customer_id'],
      type: 'foreign key',
      name: 'item_codes_customer_id_fkey',
      references: {
        table: 'customers',
        field: 'id'
      }
    })
    
    await queryInterface.addConstraint('item_codes', {
      fields: ['prod_id'],
      type: 'foreign key',
      name: 'item_codes_prod_id_fkey',
      references: {
        table: 'products',
        field: 'id'
      }
    })
    
    await queryInterface.addConstraint('promotions', {
      fields: ['promo_prod_id'],
      type: 'foreign key',
      name: 'promotions_promo_prod_id_fkey',
      references: {
        table: 'products',
        field: 'id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('bundles', 'bundles_prod_id_fkey')
    await queryInterface.removeConstraint('bundles', 'bundles_bundle_prod_id_fkey')
    await queryInterface.removeConstraint('item_codes', 'item_codes_customer_id_fkey')
    await queryInterface.removeConstraint('item_codes', 'item_codes_prod_id_fkey')
    await queryInterface.removeConstraint('promotions', 'promotions_promo_prod_id_fkey')
  }
};