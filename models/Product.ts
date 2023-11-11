import {
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  Sequelize
} from 'sequelize'

export class Product extends Model<
  InferAttributes<Product>,
  InferCreationAttributes<Product>
> {
  declare id: CreationOptional<number>
  declare prodName: string | null
  declare prodDetail: string | null
  declare prodPrice: number
  declare openSaleDate: string | null
  declare endSaleDate: string | null
  declare discountStartDate: string | null
  declare discountEndDate: string | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  static associate(models: any) {
    Product.hasMany(models.Bundle, {
      foreignKey: 'prodId',
      as: 'bundles',
    });
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
        type: DataTypes.DATEONLY
      },
      endSaleDate: {
        type: DataTypes.DATEONLY
      },
      discountStartDate: {
        type: DataTypes.DATEONLY
      },
      discountEndDate: {
        type: DataTypes.DATEONLY
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