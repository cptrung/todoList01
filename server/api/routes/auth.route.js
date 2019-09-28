const express = require('express');
const authController = require('./../controllers/auth.controller');

const route = express.Router();

route.post('/sigin',authController.sigIn);

module.exports = route;