const axios = require("axios")
const { Driver } = require("../db")
const URL = "http://localhost:5000/drivers"
const getDrivers = async (req, res) => {
  try {
        console.log("Iniciando la obtención de conductores...");

    const driverApi = (await axios(URL)).data;
    const drivers = await Driver.findAll();
    console.log("usando el finall");
    if (driverApi && drivers) {
      const allDrivers = [...driverApi, ...drivers]
      return res.status(200).json({status:true, allDrivers})
    }
   else {
  return res.status(400).json({ status: false, message: "No se pudo obtener conductores" });
}

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener conductores' });
  }
};

module.exports = getDrivers;