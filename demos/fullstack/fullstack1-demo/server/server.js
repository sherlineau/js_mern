// 1. import dependencies
const express = require("express")
const cors = require('cors')
const app = express()
const port = 8000
module.exports = DATABASE = 'song_db'

// 2,1 mongoose configs
require('./configs/mongoose.config')

// 2.2 express configs
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 3. routes
require('./routes/song.routes')(app)

// 4. listen to port
app.listen(port, () => console.log(`Listening to ${port}`))