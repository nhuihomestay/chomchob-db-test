import type { Sequelize, Model } from 'sequelize'
import { Product } from './Product'
import { Bundle } from './Bundle'
import { ItemCode } from './ItemCode'
import { Customer } from './Customer'
import { Promotion } from './Promotion'

export {
  Product,
  Bundle,
  ItemCode,
  Customer,
  Promotion
}

export function initModels(sequelize: Sequelize) {
  Product.initModel(sequelize)
  Bundle.initModel(sequelize)
  ItemCode.initModel(sequelize)
  Customer.initModel(sequelize)
  Promotion.initModel(sequelize)

  Product.hasMany(Bundle, {
    as: 'bundles',
    foreignKey: 'prod_id'
  })
  Product.hasMany(ItemCode, {
    as: 'itemCodes',
    foreignKey: 'prod_id'
  })
  Product.hasOne(Promotion, {
    as: 'promotion',
    foreignKey: 'promo_prod_id'
  })
  Bundle.belongsTo(Product, {
    as: 'product',
    foreignKey: 'prod_id'
  })
  Bundle.belongsTo(Product, {
    as: 'bundleProduct',
    foreignKey: 'bundle_prod_id'
  })
  ItemCode.belongsTo(Customer, {
    as: 'owner',
    foreignKey: 'own_by'
  })
  ItemCode.belongsTo(Product, {
    as: 'product',
    foreignKey: 'prod_id'
  })
  Customer.hasMany(ItemCode, {
    as: 'itemCodes',
    foreignKey: 'customer_id'
  })
  Promotion.belongsTo(Product, {
    as: 'product',
    foreignKey: 'promo_prod_id'
  })

  return {
    Product,
    Bundle,
    ItemCode,
    Customer,
    Promotion
  }
}
