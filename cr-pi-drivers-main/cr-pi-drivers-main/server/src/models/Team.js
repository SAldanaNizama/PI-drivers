const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Team', {
    ID: {
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true,
      allowNull: false,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

// module.exports = (sequelize) => {
//   sequelize.define('Team', {
//     Nombre: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   });
// };