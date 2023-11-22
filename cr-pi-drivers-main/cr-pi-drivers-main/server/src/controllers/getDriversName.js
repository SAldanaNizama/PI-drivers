// const axios = require("axios")
// const { Driver } = require('../db'); // Asegúrate de importar el modelo Driver
// const { Op } = require('sequelize');
// const URL = "http://localhost:5000/drivers?name.forename="
// const getDriversByName = async (req, res) => {
//   const { name } = req.query;
// if (!name || typeof name !== 'string') {
//     return res.status(400).json({ status: false, message: 'Parámetro de nombre inválido' });
//   }
//   try {
//     let driversApi = (await axios.get(`${URL}${name}`)).data
//     if(!driversApi) driversApi = []
//     // Consulta la base de datos para buscar conductores que coincidan con el nombre
//     let drivers = await Driver.findAll({
//       where: {
//         name: {
//           [Op.iLike]: `%${name}%`, // Búsqueda independiente de mayúsculas y minúsculas
//         },
//       },
//       limit: 15, // Obtener los primeros 15 conductores
//     });
//     if(!drivers) drivers = []

//     if (drivers || driversApi) {
//       const allDriversMyName = [...drivers, ...driversApi]
//       return res.status(200).json(allDriversMyName)
//     }
//     // if (drivers.length === 0) {
//     //   return res.status(404).json({ error: 'Conductores no encontrados' });
//     // }


//     res.json(drivers);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error al buscar conductores' });
//   }
// }
// module.exports = getDriversByName;