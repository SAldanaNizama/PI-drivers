const { DataTypes } = require("sequelize")

// module.exports = (sequelize) => {
//   sequelize.define('Driver', {
//     Nombre: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     Apellido: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     Descripcion: DataTypes.TEXT,
//     Imagen: DataTypes.STRING,
//     Nacionalidad: DataTypes.STRING,
//     FechaNacimiento: DataTypes.DATE,
//   });
// };
module.exports = (sequelize) => {
  sequelize.define('Driver', {
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
    Apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Descripcion: DataTypes.TEXT,
    Imagen: DataTypes.STRING,
    Nacionalidad: DataTypes.STRING,
    FechaNacimiento: DataTypes.DATE,
  });
};