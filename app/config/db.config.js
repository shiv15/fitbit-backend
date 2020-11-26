module.exports = {
  HOST: "fitbit-data.mysql.database.azure.com",
  USER: "groupmember@fitbit-data",
  PASSWORD: "Group@2020",
  DB: "fitbit_user_data",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
