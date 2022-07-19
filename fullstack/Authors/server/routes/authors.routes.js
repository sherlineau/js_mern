// TODO: import controller
const TestController = require('../controllers/authors.controllers')

// route to test backend connection
module.exports = function (app) {
    app.get('/api', TestController.index)
}