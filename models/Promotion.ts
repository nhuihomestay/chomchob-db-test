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

type PromotionAssociations = 'product'

export class Promotion extends Model<
  InferAttributes<Promotion, {omit: PromotionAssociations}>,
  InferCreationAttributes<Promotion, {omit: PromotionAssociations}>
> {
  declare id: CreationOptional<number>
  declare promoProdId: number | null
  declare discountPercentage: number | null
  declare expireDate: Date | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Promotion belongsTo Product (as Product)
  declare product?: NonAttribute<Product>
  declare getProduct: BelongsToGetAssociationMixin<Product>
  declare setProduct: BelongsToSetAssociationMixin<Product, number>
  declare createProduct: BelongsToCreateAssociationMixin<Product>
  
  declare static associations: {
    product: Association<Promotion, Product>
  }

  static initModel(sequelize: Sequelize): typeof Promotion {
    Promotion.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      promoProdId: {
        type: DataTypes.INTEGER
      },
      discountPercentage: {
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
    
    return Promotion
  }
}
