module.exports = {
  db: require("./mongoose"),
  Hash: require("./Hash"),
  Str: require("./Str"),
  DeepCopy: (data) => JSON.parse(JSON.stringify(data)),
};
