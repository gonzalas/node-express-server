const { saveUser, getAllUsers } = require('../services/user.services');

const createUser = async (req, res) => {
  try {
    const userCreated = await saveUser(req.body);
    res.status(201).send({
      message: 'User created succesfully',
      data: userCreated,
    });
  } catch (error) {
    res.status(400).send({
      message: `Error: ${error.message}`,
      data: null,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    if (users.length > 0) {
      res.status(200).send(users);
    } else {
      res.status(404).send({
        message: 'No users found',
        data: null,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error: ${error.message}`,
      data: null,
    });
  }
};

module.exports = {
  createUser,
  getUsers,
};
