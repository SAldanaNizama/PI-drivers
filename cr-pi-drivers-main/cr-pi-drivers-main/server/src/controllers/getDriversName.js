const express = require('express');
const { Driver } = require('./models'); // Asegúrate de importar el modelo Driver
const { Op } = require('sequelize');

const app = express();

// Ruta para buscar conductores por nombre
// app.get('/drivers/name', async (req, res) => {
//   const { name } = req.query;

//   try {
//     // Consulta la base de datos para buscar conductores que coincidan con el nombre
//     const drivers = await Driver.findAll({
//       where: {
//         Nombre: {
//           [Op.iLike]: `%${name}%`, // Búsqueda independiente de mayúsculas y minúsculas
//         },
//       },
//       limit: 15, // Obtener los primeros 15 conductores
//     });

//     if (drivers.length === 0) {
//       return res.status(404).json({ error: 'Conductores no encontrados' });
//     }

//     res.json(drivers);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error al buscar conductores' });
//   }
// });

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Servidor en ejecución en el puerto ${PORT}`);
// });

app.get('/drivers/name', async (req, res) => {
  const { name } = req.query;

  try {
    const drivers = await Driver.findAll({
      where: {
        Nombre: {
          [Op.iLike]: `%${name}%`,
        },
      },
      limit: 15,
    });

    if (drivers.length === 0) {
      return res.status(404).json({ error: 'Conductores no encontrados' });
    }

    res.json(drivers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar conductores' });
  }
});