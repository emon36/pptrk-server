const express = require("express");
const router = express.Router();
const PM = lulu.use("app/middlewares/PM");

const CatrgoryController = require('../../app/controllers/HTTP/CategoryController')

router.post(
    "/create",
    [
    //   PM([
    //     "CREATE_USER", "USER_CREATE_WITH_ACTIVATION"
    //   ])

    ],
    CatrgoryController.create
  );

  router.get("/list",
  [
//    PM([
//      "USER_READ_OTHERS", 
//    ])
 ],
   CatrgoryController.list

 );

 router.get("/details/:id",
  [
//    PM([
//      "USER_READ_OTHERS", 
//    ])
 ],
   CatrgoryController.getCategoryById

 );

 router.post("/update/:id",
 [

 ],
 CatrgoryController.update
 )

  module.exports = router;
