const { Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define('Driver',{
    id: {
      type: DataTypes.UUID, 
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
     type: DataTypes.STRING,
      allowNull:false,
    },
    image: DataTypes.STRING,
    nationality: DataTypes.STRING,
    dob: DataTypes.DATE,
  });
};  
