const Weather = function (data) {
    this.data = data
    this.error = []
}

Weather.prototype.validateUserInput = function () {
    if (this.data === '') {
        this.error.push('You must input a city name...')
    }
}

Weather.prototype.validateCity = function (error) {
    if (error.response.status === 404){
        this.error.push('city not found')
    }
}

module.exports = Weather