const axios = require("axios")
const URL = "http://localhost:5000/drivers"



const getTeams = async (req, res) => {
  try {
    const teams = await obtenerEquiposDesdeAPI()
    res.json(teams)

    // if (teams.length === 0) {
    //   const apiTeams = await obtenerEquiposDesdeAPI();

    //   if (apiTeams && apiTeams.length > 0) {
    //     await Team.bulkCreate(apiTeams);
    //     res.json(apiTeams);
    //   } else {
    //     res.status(404).json({ status: false, message: 'No se encontraron equipos en la API' });
    //   }
    // } else {
    //   res.json(teams);
    // }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: 'Error al obtener equipos', error: error.message });
  }
}

async function obtenerEquiposDesdeAPI() {
  try {
    const response = await axios.get(URL); // Reemplaza con la URL real de la API de equipos
    const data = response.data;
    const teams = data.map((driver) => driver.teams).filter((temp) => temp != null).join(",").split(",").filter((team, index, self) => self.indexOf(team) === index);
    return teams; // Asegúrate de que la respuesta de la API coincida con la estructura de los equipos en tu base de datos
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = getTeams;