// import dependencies
const express = require('express')
const cors = require('cors')
const app = express()
module.exports = DATABASE = 'authors_db'

// configs
require('./config/mongoose.config')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
require('./routes/authors.routes.js')(app)

// Listen
app.listen(8000, () => { console.log("Listening at Port 8000") })

