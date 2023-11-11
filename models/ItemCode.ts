import {
  Association,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToCreateAssociationMixin,
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import type { Customer } from './Customer'
import type { Product } from './Product'

type ItemCodeAssociations = 'owner' | 'product'

export class ItemCode extends Model<
  InferAttributes<ItemCode, {omit: ItemCodeAssociations}>,
  InferCreationAttributes<ItemCode, {omit: ItemCodeAssociations}>
> {
  declare id: CreationOptional<number>
  declare itemCode: String | null
  declare ownBy: number | null
  declare prodId: number | null
  declare isRedeem: boolean | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // ItemCode belongsTo Customer (as Owner)
  declare owner?: NonAttribute<Customer>
  declare getOwner: BelongsToGetAssociationMixin<Customer>
  declare setOwner: BelongsToSetAssociationMixin<Customer, number>
  declare createOwner: BelongsToCreateAssociationMixin<Customer>
  
  // ItemCode belongsTo Product (as Product)
  declare product?: NonAttribute<Product>
  declare getProduct: BelongsToGetAssociationMixin<Product>
  declare setProduct: BelongsToSetAssociationMixin<Product, number>
  declare createProduct: BelongsToCreateAssociationMixin<Product>
  
  declare static associations: {
    owner: Association<ItemCode, Customer>,
    product: Association<ItemCode, Product>
  }

  static initModel(sequelize: Sequelize): typeof ItemCode {
    ItemCode.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      itemCode: {
        type: DataTypes.STRING
      },
      ownBy: {
        type: DataTypes.INTEGER
      },
      prodId: {
        type: DataTypes.INTEGER
      },
      isRedeem: {
        type: DataTypes.BOOLEAN
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
    
    return ItemCode
  }
}
