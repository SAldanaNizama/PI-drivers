const { Router } = require("express");
const router = Router();

const { getDrivers, getDriversId, getDriversName, postDrivers } = require("../controllers/index");
 
router.get("/drivers", getDrivers)
router.get("/drivers/:id", getDriversId)
router.get("/driver", getDriversName)
// router.get("/teams", getTeams)
router.post("/create", postDrivers)


module.exports = router;
// const driver = require("../models/Driver")
// const team = require("../models/Team")

// router.use("/driver", driver);  
// router.use("/team", team)