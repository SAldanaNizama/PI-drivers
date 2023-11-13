const { axios } = require("axios") 
const express = require('express');
const { Driver } = require('./models'); // Asegúrate de importar el modelo Driver

const app = express();

// Ruta para obtener la lista de conductores
// app.get('/drivers', async (req, res) => {
//   try {
//     // Consulta la base de datos para obtener la lista de conductores
//     const drivers = await Driver.findAll();

//     // Itera sobre los conductores y coloca una imagen por defecto si no tienen imagen
//     drivers.forEach((driver) => {
//       if (!driver.Imagen) {
//         driver.Imagen = 'imagen_por_defecto.jpg'; // Ruta de la imagen por defecto
//       }
//     });

//     res.json(drivers);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error al obtener conductores' });
//   }
// });
//por si aca

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Servidor en ejecución en el puerto ${PORT}`);
// });

app.get('/drivers', async (req, res) => {
  try {
    const drivers = await Driver.findAll();

    drivers.forEach((driver) => {
      if (!driver.Imagen) {
        driver.Imagen = 'imagen_por_defecto.jpg';
      }
    });

    res.json(drivers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener conductores' });
  }
});
