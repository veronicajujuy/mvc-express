const express = require('express')
const router = express.Router()
const controller = require('./controllers/controllers')

//---------------------------------------------------

const axios = require('axios')
const API_KEY = 'e2d60f8db8931e9064f56521300c9a01'
const Weather = require('./model/Weather')

router.get('/', controller.renderHomePage)

router.post('/', controller.getWeather )

router.get('/about', controller.renderAboutPage)

module.exports = router