const express = require('express');
const { Driver } = require('../models/Driver');
const { Team } = require("../models/Team");

const router = express.Router(); // Usar un enrutador de express en lugar de crear una nueva aplicación
router.use(express.json());

router.post('/create', async (req, res) => {
  // Validación de datos requeridos
  const requiredFields = ['name', 'surname', 'description', 'image', 'nationality', 'dob', 'teams'];

  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({ status: false, message: `Campo '${field}' es requerido` });
    }
  }

  const {
    name,
    surname,
    description,
    image,
    nacionality,
    dob, 
    teams,

  } = req.body;

  try {
    // Crea el conductor en la base de datos
    const newDriver = await Driver.create({  
    name,
    surname,
    description,
    image,
    nacionality,
    dob, 
   
    });

    if (teams && Array.isArray(teams)) {
      // Asocia el conductor con los equipos seleccionados
      await newDriver.addTeams(teams);
    } else {
      return res.status(400).json({ status: false, error: 'Se requiere al menos un equipo para el conductor' });
    }

    res.json(newDriver);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: 'Error al crear el conductor', error: error.message });
  }
});

module.exports = router;

  

