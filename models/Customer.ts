import {
  Association,
  CreationOptional,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManySetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyCountAssociationsMixin,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import type { ItemCode } from './ItemCode'

type CustomerAssociations = 'itemCodes'

export class Customer extends Model<
  InferAttributes<Customer, {omit: CustomerAssociations}>,
  InferCreationAttributes<Customer, {omit: CustomerAssociations}>
> {
  declare id: CreationOptional<number>
  declare customerName: string
  declare customerEmail: string
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Customer hasMany ItemCode (as ItemCodes)
  declare itemCodes?: NonAttribute<ItemCode[]>
  declare getItemCodes: HasManyGetAssociationsMixin<ItemCode>
  declare setItemCodes: HasManySetAssociationsMixin<ItemCode, number>
  declare addItemCode: HasManyAddAssociationMixin<ItemCode, number>
  declare addItemCodes: HasManyAddAssociationsMixin<ItemCode, number>
  declare createItemCode: HasManyCreateAssociationMixin<ItemCode>
  declare removeItemCode: HasManyRemoveAssociationMixin<ItemCode, number>
  declare removeItemCodes: HasManyRemoveAssociationsMixin<ItemCode, number>
  declare hasItemCode: HasManyHasAssociationMixin<ItemCode, number>
  declare hasItemCodes: HasManyHasAssociationsMixin<ItemCode, number>
  declare countItemCodes: HasManyCountAssociationsMixin
  
  declare static associations: {
    itemCodes: Association<Customer, ItemCode>
  }

  static initModel(sequelize: Sequelize): typeof Customer {
    Customer.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      customerName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      customerEmail: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize
    })
    
    return Customer
  }
}
