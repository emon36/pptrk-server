const response = require("../../../app/responses/Response");
const Handler = require("../../../app/errors/Handler");

const TopicService = require("../../services/TopicService");
const { list } = require("../../permissions/Permission");

module.exports = {
  createTopic: async function (req, res) {
    try {
      const newTopic = await TopicService.createTopic({
        title: req.body.title,
        slug: req.body.slug,
        image: req.body.image,
        created_by: req.nativeAuth.user,
      });
      return response.dispatch(
        "Topic Created Successfully",
        { newTopic },
        res,
        201
      ); // wrap data in object to avoid confusion
    } catch (error) {
      return response.error(Handler(error), res);
    }
  },

  topicList: async function (req, res) {
    try {
      const topic = await TopicService.topicList(req);
      return response.dispatch(
        "Topic Listed Successfully",
        { topic },
        res,
        200
      );
    } catch {
      return response.error(Handler(error), res);
    }
  },

  topicUpdate: async function (req, res) {
    try {
      const TopicUpdate = await TopicService.topicUpdate(req);
      return response.dispatch(
        "Topic Update Successfully",
        { TopicUpdate },
        res,
        200
      );
    } catch {
      return response.error(Handler(error), res);
    }
  },

  destroy: async function (req, res) {
    try {
      const TopicDestroy = await TopicService.destroy(req);
      return response.dispatch(
        "Topic Destroy Successfully",
        { TopicDestroy },
        res,
        200
      );
    } catch {
      return response.error(Handler(error), res);
    }
  },
};
