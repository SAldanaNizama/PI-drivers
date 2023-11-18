const {  DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Driver = sequelize.define('Driver',{
   
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
  return Driver;
};  
