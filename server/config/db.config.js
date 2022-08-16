require('dotenv/config'); 
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: process.env.DATABASE_TYPE,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT
});

const testConnection = async _ => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

testConnection();



module.exports = sequelize
