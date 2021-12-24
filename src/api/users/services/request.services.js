const externalRequest = require('../../../utils/externalRequest');
const errorHandling = require('../../')

const connectAPI = async () => {
    const data = await externalRequest.get('/users');
    errorHandling(data);
    return data;
};


module.exports = {
    connectAPI,
};