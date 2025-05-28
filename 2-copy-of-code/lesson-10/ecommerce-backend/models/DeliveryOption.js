import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

export const DeliveryOption = sequelize.define('DeliveryOption', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  deliveryDays: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  priceCents: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE(3)
  },
  updatedAt: {
    type: DataTypes.DATE(3)
  },
}, {
  defaultScope: {
    order: [['createdAt', 'ASC']]
  }
});
