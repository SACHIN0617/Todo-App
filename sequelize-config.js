
var dotenv = require('dotenv'); 
var path = require('path');

dotenv.config();
var filePath = "";
switch (process.env.NODE_ENV) {
  case 'test':
    filePath = path.join(__dirname,  '.env.test');
    break;
  case 'production':
    filePath = path.join(__dirname,  '.env.production');
    break;
  default:
    filePath = path.join(__dirname, '.env.development');
}

dotenv.config({ path: filePath });



// Used only by the sequelize cli
module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  "production": {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};