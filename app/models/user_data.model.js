module.exports = (sequelize, Sequelize) => {
  const User_data = sequelize.define("user_data", {
    Date: {
      type: Sequelize.TEXT
    },
    Calories: {
      type: Sequelize.TEXT
    },
    Steps: {
      type: Sequelize.TEXT
    },
    Distance: {
      type: Sequelize.TEXT
    },
    Minutes_sitting: {
      type: Sequelize.TEXT
    },
    Minutes_of_slow_activity: {
      type: Sequelize.TEXT
    },
    Minutes_of_moderate_activity: {
      type: Sequelize.TEXT
    },
    Minutes_of_intense_activity: {
      type: Sequelize.TEXT
    },
    Calories_Activity: {
      type: Sequelize.TEXT
    },
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    }
  },
      {
        timestamps: false
      });

  return User_data;
};
