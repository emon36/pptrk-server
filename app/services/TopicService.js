const Topic = require("../models/mongoose/Topic");
const { v4: uuidv4 } = require("uuid");
const { db, Hash } = lulu.use("app/helpers");
const ResourceAlreadyExistsError = lulu.use(
  "app/errors/ResourceAlreadyExistsError"
);

function generateUserId() {
  let uid = uuidv4();
  return uid;
}

function userByEmail(email) {
  let userEmail = User.find({ email: email });
  return userEmail;
}

async function createTopic(data) {
  // let user = await userByEmail(data.email);
  // console.log(user);
  // if (user) {
  //   throw new ResourceAlreadyExistsError(
  //     "User with this email already exists."
  //   );
  // }

  return await Topic.create({
    title: data.title,
    uid: await generateUserId(),
    slug: data.slug,
    image: data.image,
  });
}

async function topicList(req) {
  let { page = 1, limit } = req.query;
  const skip = (page - 1) * limit;
  const topic = await Topic.find().skip(skip).limit(limit);
  return topic;
}

async function topicUpdate(req) {
  let { id } = req.params;
  let updateTopic = await Topic.findById(id);
  updateTopic.title = req.body.title;
  updateTopic.slug = req.body.slug;
  updateTopic.image = req.body.image;
  updateTopic.save();
  return updateTopic;
}

async function destroy(req) {
  let { id } = req.params;
  let TopicDestroy = await Topic.findById(id);
  await TopicDestroy.remove();

  return "Topic Deleted successfully";
}

module.exports = {
  createTopic,
  topicList,
  topicUpdate,
  destroy,
};
