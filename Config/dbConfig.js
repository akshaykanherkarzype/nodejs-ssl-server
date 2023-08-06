module.exports = {
  HOST: "database-1.cdkjewzed0yv.ap-south-1.rds.amazonaws.com",
  USER: "admin",
  PASSWORD: "Akshay973042",
  DB: "node_sequelize_api_db",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
