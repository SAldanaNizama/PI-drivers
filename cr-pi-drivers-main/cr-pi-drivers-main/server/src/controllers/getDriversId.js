
const { Driver } = require('../models/Driver');
const {Team} = require("../models/Team") 
    const getDriverById =  async (req, res) => {
      const { idDriver } = req.params;
    
      try {
        // Consulta la base de datos para obtener el conductor por ID
        const driver = await Driver.findByPk(idDriver, {
          include: Team, // Incluye los equipos asociados al conductor
        });
    
        if (!driver) {
          return res.status(404).json({ error: 'Conductor no encontrado' });
        }
    
        res.json(driver);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el detalle del conductor' });
      }
    }
module.exports = getDriverById