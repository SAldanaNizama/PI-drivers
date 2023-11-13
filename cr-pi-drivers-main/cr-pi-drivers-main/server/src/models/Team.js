const { DataTypes } = require('sequelize');

// module.exports = (sequelize) => {
//   sequelize.define('Team', {
//     Nombre: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   });
// };
module.exports = (sequelize) => {
  sequelize.define('Team', {
    ID: {
      type: DataTypes.UUID, // Cambia el tipo de datos a UUID
      defaultValue: DataTypes.UUIDV4, // Asigna un valor UUID por defecto
      primaryKey: true,
      allowNull: false,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
