const { default: axios } = require("axios");

const getMoviesFromUser = async (id) => {
    const url = `https://www.mockachino.com/f928b219-d333-47/users/${id}`;
    return axios.get(url);
};

module.exports = {
    getMoviesFromUser,
}