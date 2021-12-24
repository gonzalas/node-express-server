const axios = require('axios');

const getDevicesList = async () => {
  const url = `https://www.mockachino.com/f928b219-d333-47/devices`;
  return axios.get(url);
};

const validateUserExists = async (id) => {
  const {
    data: { devices },
  } = await getDevicesList();
  return filterDevicesByUser(devices, id).length > 0 ? true : false;
};

const filterDevicesByUser = (devices, userId) =>
  devices.filter(({ user: { id } }) => id == userId);

module.exports = {
  getDevicesList,
  validateUserExists,
  filterDevicesByUser
};
