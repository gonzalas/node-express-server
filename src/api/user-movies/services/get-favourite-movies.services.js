const {
  getDevicesList,
  validateUserExists,
  filterDevicesByUser,
} = require('./get-devices.services');
const { getMoviesFromUser } = require('./user-movies.services');

const getFavouriteMovies = (movies) =>
  movies.filter((movie) => movie.like === true);

const prepareResponse = async (devices, id) => {
  const { data } = await getMoviesFromUser(id);
  const { movies } = data;
  const favouriteMovies = getFavouriteMovies(movies);

  return devices.map((device) => {
    const moviesInDevice = [];

    favouriteMovies.forEach((movie) => {
      device.movies.forEach((deviceMovie) => {
        if (movie.id == deviceMovie.id) {
          delete movie.like;
          moviesInDevice.push(movie);
        }
      });
    });

    device.movies = moviesInDevice;
    delete device.user;

    return device;
  });
};

module.exports = {
  getFavouriteMovies,
  getDevicesByUser: async (id) => {
    const userExists = await validateUserExists(id);

    if (!userExists) return {};

    const {
      data: { devices },
    } = await getDevicesList();

    const filteredDevices = await prepareResponse(
      filterDevicesByUser(devices, id),
      id
    );

    return {
      user_id: id,
      devices: filteredDevices,
    };
  },
};
