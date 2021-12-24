const axios = require('axios');
const { API_KEY, API_URL } = require('../../../config');

module.exports = {
    externalRequest = () => {
        return axios.create({
            baseURL: API_URL,
            headers: {
                'authorization': API_KEY,
            }
        });
    }
}