import {
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  Sequelize
} from 'sequelize'

export class Bundle extends Model<
  InferAttributes<Bundle>,
  InferCreationAttributes<Bundle>
> {
  declare id: CreationOptional<number>
  declare prodId: number | null
  declare bundleProdId: number | null
  declare bundlePrice: number | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  static associate(models: any) {
    Bundle.belongsTo(models.Product, {
      foreignKey: 'prodId',
      as: 'product',
    });

    Bundle.belongsTo(models.Product, {
      foreignKey: 'bundleProdId',
      as: 'bundleProduct',
    });
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
        type: DataTypes.INTEGER
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