import { Sequelize } from 'sequelize';

const isUsingRDS = process.env.RDS_HOSTNAME && process.env.RDS_USERNAME && process.env.RDS_PASSWORD;

export const sequelize = new Sequelize(
  isUsingRDS
    ? {
      database: process.env.RDS_DB_NAME,
      username: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      host: process.env.RDS_HOSTNAME,
      port: process.env.RDS_PORT || 3306,
      dialect: 'mysql'
    }
    : {
      dialect: 'sqlite',
      storage: './database.sqlite'
    }
);
