module.exports = (sequelize, Sequelize) => {
    const User_list = sequelize.define("user_list", {
        user_id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.TEXT
        },
        us_state: {
            type: Sequelize.TEXT
        }
    });

    return User_list;
};
