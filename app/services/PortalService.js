const Portal = require("../models/mongoose/Portal");
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

async function createPortal(data) {
  // let user = await userByEmail(data.email);
  // console.log(user);
  // if (user) {
  //   throw new ResourceAlreadyExistsError(
  //     "User with this email already exists."
  //   );
  // }

  return await Portal.create({
    title: data.title,
    uid: await generateUserId(),
    domain: data.domain,
    image: data.image,
    image: data.image,
  });
}

async function list(req) {
  let { page = 1, limit } = req.query;
  const skip = (page - 1) * limit;
  const users = await Portal.find().skip(skip).limit(limit);
  return users;
}

async function details(req) {
  let { id } = req.params;
  let user = await Portal.findById(id);
  return user;
}

async function details(req) {
  let { id } = req.params;
  let user = await Portal.findById(id);
  return user;
}

async function update(req) {
  let { id } = req.params;
  let updatePortal = await Portal.findById(id);
  updatePortal.title = req.body.title;
  updatePortal.domain = req.body.domain;
  updatePortal.image = req.body.image;
  updatePortal.save();
  return updatePortal;
}

async function destroy(req) {
  let { id } = req.params;
  let portalDestroy = await Portal.findById(id);
  await portalDestroy.remove();

  return "Portal Deleted successfully";
}

module.exports = {
  createPortal,
  list,
  details,
  update,
  destroy,
};
