const User = require('../models/User');

const saveUser = async (body) => {
  let userSaved;
  try {
    userSaved = await User(body).save();
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
  return userSaved;
};

const getAllUsers = async () => {
  let users = [];
  try {
    users = await User.find();
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
  return users;
};

module.exports = {
  saveUser,
  getAllUsers,
};
