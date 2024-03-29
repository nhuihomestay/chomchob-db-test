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
import type { Product } from './Product'

type BundleAssociations = 'product' | 'bundleProduct'

export class Bundle extends Model<
  InferAttributes<Bundle, {omit: BundleAssociations}>,
  InferCreationAttributes<Bundle, {omit: BundleAssociations}>
> {
  declare id: CreationOptional<number>
  declare prodId: number | null
  declare bundleProdId: number | null
  declare bundlePrice: number | null
  declare expireDate: Date | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Bundle belongsTo Product (as Product)
  declare product?: NonAttribute<Product>
  declare getProduct: BelongsToGetAssociationMixin<Product>
  declare setProduct: BelongsToSetAssociationMixin<Product, number>
  declare createProduct: BelongsToCreateAssociationMixin<Product>
  
  // Bundle belongsTo Product (as BundleProduct)
  declare bundleProduct?: NonAttribute<Product>
  declare getBundleProduct: BelongsToGetAssociationMixin<Product>
  declare setBundleProduct: BelongsToSetAssociationMixin<Product, number>
  declare createBundleProduct: BelongsToCreateAssociationMixin<Product>
  
  declare static associations: {
    product: Association<Bundle, Product>,
    bundleProduct: Association<Bundle, Product>
  }

  static initModel(sequelize: Sequelize): typeof Bundle {
    Bundle.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      prodId: {
        type: DataTypes.INTEGER
      },
      bundleProdId: {
        type: DataTypes.INTEGER
      },
      bundlePrice: {
        type: DataTypes.FLOAT
      },
      expireDate: {
        type: DataTypes.DATE
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
    
    return Bundle
  }
}
