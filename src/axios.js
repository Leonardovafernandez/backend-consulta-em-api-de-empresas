const axios = require('axios');

const api = axios.create({
    baseURL: 'https://companyenrichment.abstractapi.com/v1',
    timeout: 10000,
    headers: { 'Content-Type': 'Application/json' }
});

module.exports = api;