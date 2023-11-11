import type { Sequelize, Model } from 'sequelize'
import { Product } from './Product'
import { Bundle } from './Bundle'
import { ItemCode } from './ItemCode'
import { Customer } from './Customer'

export {
  Product,
  Bundle,
  ItemCode,
  Customer
}

export function initModels(sequelize: Sequelize) {
  Product.initModel(sequelize)
  Bundle.initModel(sequelize)
  ItemCode.initModel(sequelize)
  Customer.initModel(sequelize)

  return {
    Product,
    Bundle,
    ItemCode,
    Customer
  }
}
