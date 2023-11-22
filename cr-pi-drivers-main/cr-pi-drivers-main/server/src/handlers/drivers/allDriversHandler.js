/******************************/
/* HANDLER: Todos los Pilotos */
/******************************/
const getAllDrivers = require('../../controllers/drivers/getAllDriver');

const allDriversHandler = async (req,res) => {
    try {
        const allDrivers = await getAllDrivers();
        res.status(200).json(allDrivers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = allDriversHandler