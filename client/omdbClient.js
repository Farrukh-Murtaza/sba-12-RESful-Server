const axios = require("axios");

const omdbClient = axios.create({
    baseURL: "http://www.omdbapi.com/",
});

module.exports = omdbClient;