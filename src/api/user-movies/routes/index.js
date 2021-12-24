const { Router } = require('express');

// Controllers
const {
  getUserMovies,
  getDevices,
  getFavouriteMoviesFromDevices,
} = require('../controllers/user-movies.controllers');

const userMoviesRouter = Router();

userMoviesRouter.get('users/favourite-movies:id', getUserMovies);
userMoviesRouter.get(`/devices`, getDevices);
userMoviesRouter.get('/user/:id/devices', getFavouriteMoviesFromDevices);

module.exports = userMoviesRouter;
