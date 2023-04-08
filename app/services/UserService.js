const User = require("../models/mongoose/User");
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

async function regularRegistration(data) {
  // let user = await userByEmail(data.email);
  // console.log(user);
  // if (user) {
  //   throw new ResourceAlreadyExistsError(
  //     "User with this email already exists."
  //   );
  // }

  return await User.create({
    name: data.name,
    uid: await generateUserId(),
    email: data.email,
    password: await Hash.make(data.password),
    baseRole: data.baseRole,
  });
}

async function list(req) {
  let { page = 1, limit } = req.query;
  const skip = (page - 1) * limit;
  const users = await User.find().skip(skip).limit(limit);
  return users;
}


async function getUserById(id){
  return await User.findById(id);
}

async function updateUser(req)
{
  let { id } = req.params;
  let updateUser = await User.findById(id);
  updateUser.name = req.body.name;
  updateUser.email = req.body.email;
  updateUser.password = req.body.password;
  updateUser.save();
  return updateUser;

}
module.exports = {
  regularRegistration,
  list,
  getUserById,
  updateUser
};
