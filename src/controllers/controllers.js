const axios = require('axios')
const API_KEY = 'e2d60f8db8931e9064f56521300c9a01'
const Weather = require('../model/Weather')

exports.renderHomePage = (req, res) => {
    res.render('index')
}

exports.getWeather = (req, res) => {
    const {city} = req.body
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    
    const weather = new Weather(req.body.city)

    weather.validateUserInput()

    if (weather.error.length) {
        res.render('index', {
            error: weather.error.toString()
        })
    } else {
        axios.get(url)
            .then(response => 
                res.render('index', {
                    weather: `It's currently ${response.data.main.temp}° in ${response.data.name}`
                })
                )
            .catch(error => {
                weather.validateCity(error)
                res.render('index', {
                    error: weather.error.toString()
                })
            })

    }}
   


exports.renderAboutPage = (req, res) => {
    res.render('about')
}


// en este archivo se guardan todas las funciones que manejan la logica
// de nuestro programa, interactuan con la vista y el modelo