const { Router } = require('express');

// Controllers
const { getUserMovies, getDevices, getFavouriteMoviesFromDevices } = require('../controllers/user-movies.controllers');

const userMoviesRouter = Router();

const baseUrl = '/users/favourite-movies';

userMoviesRouter.get(`${baseUrl}/:id`, getUserMovies);
userMoviesRouter.get(`/devices`, getDevices);
userMoviesRouter.get('/user/:id/devices', getFavouriteMoviesFromDevices);

module.exports = userMoviesRouter;