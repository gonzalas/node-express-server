const axios = require('axios');
const { API_KEY, API_URL } = require('../../../config');

module.exports = {
    externalRequest = () => {
        return axios.create({
            baseURL:'',
            headers: {
                API_KEY,
                API_URL
            }
        });
    }
}