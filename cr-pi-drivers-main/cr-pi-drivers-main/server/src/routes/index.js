const { Router } = require("express");
const router = Router();

const { getDrivers, getDriversId, getDriversName, postDrivers, getTeams, getDelete } = require("../controllers/index");
 
router.get("/drivers", getDrivers)
router.get("/drivers/:id", getDriversId)
router.get("/driver", getDriversName)
router.get("/teams", getTeams)
router.post("/drivers", postDrivers)
router.delete("/drivers/:id", getDelete)


const driver = require("../models/Driver")
const team = require("../models/Team")

router.use("/", driver);  
router.use("/", team)
module.exports = router;