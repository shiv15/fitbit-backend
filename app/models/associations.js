const User_data = require("./user_data.model");
const User_list = require("./user_list.model.model");

User_list.hasMany(User_data, {foreignKey: 'user_id', sourceKey: 'user_id'});
User_data.belongsTo(User_list, {foreignKey: 'user_id', targetKey: 'user_id'});