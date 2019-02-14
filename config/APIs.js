const environment = require('../ENV')

const development = {
  ENV: 'development',
  API: '',
  publicPath: './'
}

const testing = {
  ENV: 'testing',
  API: '',
  publicPath: './'
}

const sit = {
  ENV: 'sit',
  API: '',
  publicPath: './'
}

const production = {
  ENV: 'production',
  API: '',
  publicPath: './'
}

const APP_Test = {
  ENV: 'APP',
  API: '',
  publicPath: './'
}

const APP_Prod = {
  ENV: 'APP',
  API: '',
  publicPath: './'
}

module.exports = (function () {
  if (environment === 'development') {
    return development
  } else if (environment === 'testing') {
    return testing
  } else if (environment === 'sit') {
    return sit
  }else if (environment === 'production') {
    return production
  } else if (environment === 'APP_Test') {
    return APP_Test
  } else if (environment === 'APP_Prod') {
    return APP_Prod
  }
})()
