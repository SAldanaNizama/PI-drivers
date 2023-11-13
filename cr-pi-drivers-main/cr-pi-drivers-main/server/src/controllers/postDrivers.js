const express = require('express');
const { Driver, Team } = require('./models'); // Asegúrate de importar los modelos Driver y Team

const app = express();
app.use(express.json());

// Ruta para crear un nuevo conductor y relacionarlo con equipos
// app.post('/drivers', async (req, res) => {
//   const {
//     Nombre,
//     Apellido,
//     Descripcion,
//     Imagen,
//     Nacionalidad,
//     FechaNacimiento,
//     TeamIds, // Un arreglo con los IDs de los equipos a los que se relacionará el conductor
//   } = req.body;

//   try {
//     // Crea el conductor en la base de datos
//     const newDriver = await Driver.create({
//       Nombre,
//       Apellido,
//       Descripcion,
//       Imagen,
//       Nacionalidad,
//       FechaNacimiento,
//     });

//     if (TeamIds && Array.isArray(TeamIds)) {
//       // Asocia el conductor con los equipos seleccionados
//       await newDriver.addTeams(TeamIds);
//     } else {
//       return res.status(400).json({ error: 'Se requiere al menos un equipo para el conductor' });
//     }

//     res.json(newDriver);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error al crear el conductor' });
//   }
// });

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Servidor en ejecución en el puerto ${PORT}`);
// });


app.post('/drivers', async (req, res) => {
  const {
    Nombre,
    Apellido,
    Descripcion,
    Imagen,
    Nacionalidad,
    FechaNacimiento,
    TeamIds,
  } = req.body;

  try {
    const newDriver = await Driver.create({
      ID: DataTypes.UUIDV4, // Genera un nuevo UUID
      Nombre,
      Apellido,
      Descripcion,
      Imagen,
      Nacionalidad,
      FechaNacimiento,
    });

    if (TeamIds && Array.isArray(TeamIds)) {
      await newDriver.addTeams(TeamIds);
    } else {
      return res.status(400).json({ error: 'Se requiere al menos un equipo para el conductor' });
    }

    res.json(newDriver);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el conductor' });
  }
});