import {
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  Sequelize
} from 'sequelize'

export class ItemCode extends Model<
  InferAttributes<ItemCode>,
  InferCreationAttributes<ItemCode>
> {
  declare id: CreationOptional<number>
  declare ownBy: number
  declare discountPercentage: number | null
  declare expireDate: string | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  static associate(models: any) {
    ItemCode.belongsTo(models.Customer, {
      foreignKey: 'ownBy',
      as: 'owner',
    });
  }
  
  static initModel(sequelize: Sequelize): typeof ItemCode {
    ItemCode.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      ownBy: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      discountPercentage: {
        type: DataTypes.FLOAT
      },
      expireDate: {
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
    
    return ItemCode
  }
}