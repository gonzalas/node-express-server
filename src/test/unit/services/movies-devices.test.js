const {
  getDevicesByUser,
} = require('../../../api/user-movies/services/get-favourite-movies.services');

describe('Movies by user and devices', () => {
  describe('getDevicesByUser', () => {
    it('should return correct payload', async () => {
      const id = 1;
      const response = await getDevicesByUser(id);

      if (response?.devices?.movies) {
        expect(response).toHaveProperty('user_id');
        expect(response).toHaveProperty('devices');
        expect(response.devices[0]).toHaveProperty('device_name');
        expect(response.devices[0]).toHaveProperty('ip');
        expect(response.devices[0]).toHaveProperty('movies');
        expect(response.devices[0].movies[0]).toHaveProperty('title');
        expect(response.devices[0].movies[0]).toHaveProperty('id');
      }
    });
  });
});
