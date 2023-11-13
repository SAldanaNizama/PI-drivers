const express = require('express');
const { Team } = require('./models');

const app = express();

// Ruta para obtener la lista de equipos
// app.get('/teams', async (req, res) => {
//   try {
//     // Consulta la base de datos para obtener la lista de equipos
//     const teams = await Team.findAll();

//     if (teams.length === 0) {
//       // Si la base de datos está vacía, obtén los equipos de la API y guárdalos en la base de datos
//       const apiTeams = await obtenerEquiposDesdeAPI();

//       if (apiTeams && apiTeams.length > 0) {
//         await Team.bulkCreate(apiTeams);
//         res.json(apiTeams);
//       } else {
//         res.status(404).json({ error: 'No se encontraron equipos en la API' });
//       }
//     } else {
//       res.json(teams);
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error al obtener equipos' });
//   }
// });

// // Función para obtener los equipos desde la API
// async function obtenerEquiposDesdeAPI() {
//   try {
//     const response = await fetch('URL_DE_LA_API_DE_EQUIPOS'); // Reemplaza con la URL real de la API de equipos
//     const data = await response.json();
//     return data; // Asegúrate de que la respuesta de la API coincida con la estructura de los equipos en tu base de datos
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Servidor en ejecución en el puerto ${PORT}`);
// });

app.get('/teams', async (req, res) => {
  try {
    const teams = await Team.findAll();

    if (teams.length === 0) {
      const apiTeams = await obtenerEquiposDesdeAPI();

      if (apiTeams && apiTeams.length > 0) {
        await Team.bulkCreate(apiTeams);
        res.json(apiTeams);
      } else {
        res.status(404).json({ error: 'No se encontraron equipos en la API' });
      }
    } else {
      res.json(teams);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener equipos' });
  }
});