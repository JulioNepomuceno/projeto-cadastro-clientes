import { Sequelize } from "sequelize";


const dbName = process.env.DB_NAME!;
const dbUser = process.env.DB_USER!;
const dbPassword = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;


const sequelize = new Sequelize(dbName,dbUser,dbPassword,{
    "dialect": "postgres",
    host:dbHost
});

export default sequelize;