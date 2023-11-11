import {
  Association,
  BelongsToManyGetAssociationsMixin,
  BelongsToManySetAssociationsMixin,
  BelongsToManyAddAssociationMixin,
  BelongsToManyAddAssociationsMixin,
  BelongsToManyCreateAssociationMixin,
  BelongsToManyRemoveAssociationMixin,
  BelongsToManyRemoveAssociationsMixin,
  BelongsToManyHasAssociationMixin,
  BelongsToManyHasAssociationsMixin,
  BelongsToManyCountAssociationsMixin,
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
  HasOneGetAssociationMixin,
  HasOneSetAssociationMixin,
  HasOneCreateAssociationMixin,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import type { Bundle } from './Bundle'
import type { ItemCode } from './ItemCode'
import type { Promotion } from './Promotion'

type ProductAssociations = 'bundles' | 'itemCodes' | 'promotion'

export class Product extends Model<
  InferAttributes<Product, {omit: ProductAssociations}>,
  InferCreationAttributes<Product, {omit: ProductAssociations}>
> {
  declare id: CreationOptional<number>
  declare prodName: string | null
  declare prodDetail: string | null
  declare prodPrice: number
  declare openSaleDate: Date | null
  declare endSaleDate: Date | null
  declare discountStartDate: Date | null
  declare discountEndDate: Date | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Product belongsToMany Bundle (as Bundles)
  declare bundles?: NonAttribute<Bundle[]>
  declare getBundles: BelongsToManyGetAssociationsMixin<Bundle>
  declare setBundles: BelongsToManySetAssociationsMixin<Bundle, number>
  declare addBundle: BelongsToManyAddAssociationMixin<Bundle, number>
  declare addBundles: BelongsToManyAddAssociationsMixin<Bundle, number>
  declare createBundle: BelongsToManyCreateAssociationMixin<Bundle>
  declare removeBundle: BelongsToManyRemoveAssociationMixin<Bundle, number>
  declare removeBundles: BelongsToManyRemoveAssociationsMixin<Bundle, number>
  declare hasBundle: BelongsToManyHasAssociationMixin<Bundle, number>
  declare hasBundles: BelongsToManyHasAssociationsMixin<Bundle, number>
  declare countBundles: BelongsToManyCountAssociationsMixin
  
  // Product hasMany ItemCode (as ItemCodes)
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
  
  // Product hasOne Promotion (as Promotion)
  declare promotion?: NonAttribute<Promotion>
  declare getPromotion: HasOneGetAssociationMixin<Promotion>
  declare setPromotion: HasOneSetAssociationMixin<Promotion, number>
  declare createPromotion: HasOneCreateAssociationMixin<Promotion>
  
  declare static associations: {
    bundles: Association<Product, Bundle>,
    itemCodes: Association<Product, ItemCode>,
    promotion: Association<Product, Promotion>
  }

  static initModel(sequelize: Sequelize): typeof Product {
    Product.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      prodName: {
        type: DataTypes.STRING
      },
      prodDetail: {
        type: DataTypes.TEXT
      },
      prodPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      openSaleDate: {
        type: DataTypes.DATE
      },
      endSaleDate: {
        type: DataTypes.DATE
      },
      discountStartDate: {
        type: DataTypes.DATE
      },
      discountEndDate: {
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
    
    return Product
  }
}
