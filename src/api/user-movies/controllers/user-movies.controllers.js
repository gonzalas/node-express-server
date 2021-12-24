const { getMoviesFromUser } = require('../services/user-movies.services');
const {
  getFavouriteMovies,
  getDevicesByUser,
} = require('../services/get-favourite-movies.services');
const { getDevicesList } = require('../services/get-devices.services');

const getUserMovies = async (req, res) => {
  const { id } = req.params;
  const { data } = await getMoviesFromUser(id);
  const { movies } = data;
  const favouriteMovies = getFavouriteMovies(movies);

  return res.status(200).send(favouriteMovies);
};

const getDevices = async (req, res) => {
  const {
    data: { devices },
  } = await getDevicesList();

  return res.status(200).send(devices);
};

const getFavouriteMoviesFromDevices = async (req, res) => {
  const { id } = req.params;
  const response = await getDevicesByUser(id);

  return res.status(200).send(response);
};

module.exports = {
  getUserMovies,
  getDevices,
  getFavouriteMoviesFromDevices,
};
