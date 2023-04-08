const express = require("express");
const router = express.Router();
const PM = lulu.use("app/middlewares/PM");

const UserController = require("../../app/controllers/HTTP/UserController");

router.post(
  "/create",
  [PM(["CREATE_USER", "USER_CREATE_WITH_ACTIVATION"])],
  UserController.create
);

router.get("/list", [PM(["USER_READ_OTHERS"])], UserController.list);

router.get(
  "/details/:id",
  [PM(["USER_READ_OTHERS"])],
  UserController.getUserById
);

router.post("/update/:id", [PM(["ANY"])], UserController.update);

module.exports = router;
