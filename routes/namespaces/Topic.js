const express = require("express");
const router = express.Router();
const PM = lulu.use("app/middlewares/PM");

const TopicController = require("../../app/controllers/HTTP/TopicController");

router.post("/create", [PM(["ANY"])], TopicController.createTopic);
router.get("/list", [PM(["USER_READ_OTHERS"])], TopicController.topicList);
router.put("/update/:id", [PM(["ANY"])], TopicController.topicUpdate);
router.delete("/destroy/:id", [PM(["ANY"])], TopicController.destroy);

module.exports = router;
