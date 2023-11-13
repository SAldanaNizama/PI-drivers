const express = require('express');
const { Driver, Team } = require('./models'); // Asegúrate de importar los modelos Driver y Team

const app = express();

// Ruta para obtener el detalle de un conductor específico por ID
// app.get('/drivers/:idDriver', async (req, res) => {
//   const { idDriver } = req.params;

//   try {
//     // Consulta la base de datos para obtener el conductor por ID
//     const driver = await Driver.findByPk(idDriver, {
//       include: Team, // Incluye los equipos asociados al conductor
//     });

//     if (!driver) {
//       return res.status(404).json({ error: 'Conductor no encontrado' });
//     }

//     res.json(driver);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error al obtener el detalle del conductor' });
//   }
// });

app.get('/drivers/:idDriver', async (req, res) => {
  const { idDriver } = req.params;

  try {
    const driver = await Driver.findByPk(idDriver, {
      include: Team,
    });

    if (!driver) {
      return res.status(404).json({ error: 'Conductor no encontrado' });
    }

    res.json(driver);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el detalle del conductor' });
  }
});
