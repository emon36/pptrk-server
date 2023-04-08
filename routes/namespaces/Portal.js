const express = require("express");
const router = express.Router();
const PM = lulu.use("app/middlewares/PM");

const PortalController = require("../../app/controllers/HTTP/PortalController");

router.post("/add", [PM(["ANY"])], PortalController.portalAdd);

router.get("/list", [PM(["USER_READ_OTHERS"])], PortalController.list);
router.get("/list/:id", [PM(["USER_READ_OTHERS"])], PortalController.details);
router.put("/update/:id", [PM(["ANY"])], PortalController.update);
router.delete("/destroy/:id", [PM(["ANY"])], PortalController.destroy);

module.exports = router;
