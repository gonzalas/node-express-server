const { Router } = require('express');
const { createUser, getUsers } = require('../controllers/user.controller');

const userRouter = Router();

const baseRoute = '/users';

userRouter.get(baseRoute, getUsers);

userRouter.post(baseRoute, createUser);

module.exports = userRouter;
